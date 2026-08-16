# このリポジトリについて

個人ブログ（Astro）。GitHub Pages（`https://ivix2020.github.io/my-astro-blog`）に、`main`へのpush / 手動実行 / 日次cronで自動デプロイされる（[.github/workflows/deploy.yml](.github/workflows/deploy.yml)）。

コンテンツコレクションは3つ（[src/content.config.ts](src/content.config.ts)）:
- `blog` — 雑記・週次報告など。`directory`フィールドで緩くタグ分け（`weekly`など）
- `products` — 作った物の一覧
- `missions` — A Mission a Month（後述）

## A Mission a Month（AMAM）

1ヶ月にひとつ目標（ミッション）を決めて、その実現過程を記録するプロジェクト。

**目的の優先順位**: ①自己成長の記録 ②ポートフォリオ／実績づくり ③読者を巻き込むコンテンツ。この順で判断に迷った時の指針にする。

### フォーマットの設計方針

- **1ミッション = 1ヶ月 = 1記事**。週ごとに別記事を立てるのではなく、`src/content/missions/YYYY-MM-slug/index.md` を月内で継続更新する1本にまとめる（理由: ポートフォリオとして1URLに集約したいため。詳細は過去のセッション経緯を参照）
- 本文構成は「🎯 今月のミッション宣言 → 📡 今月の更新ログ（Bluesky埋め込み） → 📊 振り返り」の3部構成。宣言と振り返りは必ず含める
- **週次の更新頻度はBlueskyに逃がす**。ブログ記事自体を毎週書き換える手間を減らすため、日々の細かい進捗はBlueskyに固定タグ`#amam`（小文字、月をまたいでも変えない）付きで投稿するだけでいい。月ごとの絞り込みはタグではなく、各ミッションのfrontmatter（`startDate`/`endDate`）を使ってビルド時に`since`/`until`で期間指定して行う（[src/lib/bluesky.ts](src/lib/bluesky.ts)）
- **未達成・失敗の月も必ず公開する**（`status: failed`）。失敗のログ自体を自己成長の記録として資産にする方針

### frontmatterスキーマ

`src/content.config.ts` の `missions` コレクション参照。主なフィールド:
- `genre` — 毎月変わる想定（プログラミング/健康/創作など固定タクソノミーなし）
- `month` — `"2026-09"` 形式
- `goal` / `successCriteria` — 目標と、数えられる成功の定義（「なんとなく満足」で終わらせないため）
- `status` — `planning` → `in-progress` → `completed` / `failed`
- `bluesky.hashtag` — 固定値`"#amam"`を毎月使い回す（月の絞り込みはタグでなく`startDate`/`endDate`で行うため）
- `todos` — 進捗ダッシュボード用のTODOリスト（後述）

### サイト構成

- 一覧（ダッシュボード）: [src/pages/missions/index.astro](src/pages/missions/index.astro)（`/missions/`）。各カードに進捗ミニゲージを表示
- 個別記事: [src/pages/missions/[...slug].astro](src/pages/missions/%5B...slug%5D.astro) → [src/layouts/MissionPost.astro](src/layouts/MissionPost.astro)
- Bluesky埋め込み: [src/components/BlueskyFeed.astro](src/components/BlueskyFeed.astro) + [src/lib/bluesky.ts](src/lib/bluesky.ts)
- 進捗ダッシュボード: [src/components/ProgressGauge.astro](src/components/ProgressGauge.astro)（円形ゲージ）+ [src/components/TodoList.astro](src/components/TodoList.astro)（2階層チェックリスト）+ [src/lib/todos.ts](src/lib/todos.ts)（進捗率の計算）

### 進捗ダッシュボード（TODOリスト）

「開いた瞬間にどれくらい実現できているか分かる」ことを目的に、`todos` フィールドで進捗を可視化する。

frontmatterの書き方（2階層まで）:
```yaml
todos:
  - text: "大項目（サブタスクあり）"
    subtasks:
      - text: "サブタスク1"
        done: true
      - text: "サブタスク2"
        done: false
  - text: "サブタスクなしの項目"
    done: false
```

計算ルール（[src/lib/todos.ts](src/lib/todos.ts) `calcProgress`）:
- `subtasks`がある項目は、親自身の`done`は無視し、サブタスクの完了数/総数だけを進捗率に加算する
- `subtasks`がない項目は、その項目自身の`done`を1カウントとして加算する
- 一覧ページのミニゲージ、個別ページの大きいゲージ＋チェックリストは同じ`calcProgress`を使っているので、両者は必ず一致する
- `todos`が空配列の記事（プレースホルダーなど）は進捗セクション自体を表示しない

### Bluesky連携の技術的な注意点（重要）

Blueskyの匿名公開API（`public.api.bsky.app`）は `searchPosts` への未認証アクセスを**403で拒否する**（クライアント側からでもビルド時の未認証fetchでも同様。CORSの問題ではなく認証の問題）。そのため:

- `src/lib/bluesky.ts` は **App Passwordで認証セッションを取得**してから（`com.atproto.server.createSession`）、`bsky.social`エントリーウェイ経由で`app.bsky.feed.searchPosts`を叩く
- 実行は**ビルド時（Node.js、SSG）のみ**。クライアント側JSでは呼ばない
- 必要な環境変数: `BLUESKY_HANDLE`, `BLUESKY_APP_PASSWORD`（[.env.example](.env.example)参照）
  - ローカル: `.env`に実際の値を書く（`.gitignore`済み）。**`.env`編集後はdevサーバーの再起動が必須**（環境変数は起動時に一度だけ読まれる。ホットリロードされない）
  - 本番: GitHubリポジトリの Settings → Secrets and variables → Actions に `BLUESKY_HANDLE` / `BLUESKY_APP_PASSWORD` を登録
- 認証情報が未設定/取得失敗の場合はビルドを落とさず、フォールバック表示（Blueskyへの検索リンク）に静かに切り替わる（`fetchFailed`）
- サイトは完全な静的サイト（GitHub Pages、SSRなし）なので、投稿を反映するには**リビルドが必要**。[.github/workflows/deploy.yml](.github/workflows/deploy.yml) に日次cron（21:00 UTC = 06:00 JST）を設定済み。今すぐ反映したい場合はGitHub Actionsから`Deploy Astro to GitHub Pages`を手動実行（`workflow_dispatch`）

### ローカル開発の注意

このマシンでは**ポート4321が別プロジェクト（`the-four-seasons-wiki`）に常時使われている**ことがある。`npm run dev`実行時、ターミナルに表示される実際のURL（自動で採番される別ポート）を確認すること。ポート決め打ちで古いキャッシュ済みのタブを見続けると「直したのに反映されない」という混乱の元になる。

### 運用の流れ

1. 月初: プレースホルダー/前月の記事をコピーし、実際のミッション内容・`todos`チェックリストを書いて`status: in-progress`
2. 月内: 普段どおりBlueskyに`#amam`付きで投稿するだけ（記事は書き換えない。月替わりでタグを変える必要もない）。タスクが進んだら`todos`の該当項目の`done: true`を更新してコミットすれば、ダッシュボードの進捗率も連動して上がる
3. 月末: 振り返りセクションを執筆し、`status: completed`または`failed`に更新

現在 `src/content/missions/2026-09-ai-video-pipeline/index.md` は**動作確認用のサンプル記事**（架空の内容）。実際の9月ミッションが決まったら中身を差し替える。
