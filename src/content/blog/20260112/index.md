---
title: 2026-W02 創作面が意外と捗った
slug: "20260112"
description: 'Obsidian習慣が定着し、創作環境が変動しつつある'
status: public
pubDate: Jan 12 2026
heroImage: ""
---
## Obsidian 関係
### 公式に申請中の Community Plugin は依然承認待ち
`Obsidian KOBO Highlight Picker & Inboxer`というアプリを先週から申請しているが、いまだに承認がされない。botでの審査 -> 人間による審査という流れで、bot審査は終えているという認識なのだが、ひょっとするとそれが漏れているのかも......。
個人的に、審査が通らなくても別にいいかなという気もする。最大の意義は「Obsidian Pluginの作り方と申請の仕方のざっくりとした流れ」を掴めたこと。Publishして多くの人に役立ってほしいという思いはあるけど、あくまでそれはついでだ。
2026年の`自利利他` `自ら證る（おのずからさとる）`の精神に則りたい。その心は「**まずは自分に役立つことを。その結果が誰かの役に立てば御の字**」。大事なのは常に、まず自分だ。
### Zettelkastenを自動でGitHubにバックアップするように
今更なのだが。
Community Pluginの`Git`を使っている。

### Community Plugin「Note Definition」を導入
`Note Definition`というCommunity Pluginは、指定したフォルダに言葉の定義をノート形式で蓄積することができる。蓄積した「Definition」はObsidian上のノートで自動で検知され、カーソルをかざすと自動でポップアップされるようになる。

分量が増えたときに重くならないか心配ではあるし、案外そんなに使ってもいないのだが、アイデアが面白くて気に入っている。そもそものObsidianのHeavy Linkingの手法とばっちり被る気もするのだが、「ノートにするほどではないがよく忘れるので意味を覚えておきたい単語」とかを保管するのにいいかもしれない。

**Obsidian Plugin リンク**::[Note Definition](obsidian://show-plugin?id=note-definitions)

なお、当初は英語学習にいいかなと思ったが、よく考えるとあまり向かないかもしれない。英単語ってノートにする上では動詞を現在形にしたり、「一般化」したりすることが多いが（Stretch His Legs -> Stretch One's Legs みたいな）、そうすると自動ポップアップの検知ができない。

あと弱点として、この自動ポップアップは「分かち書きの文章」にしか対応していない。日本語や中国語のような、スペースで単語を分けない文化には向かない。

### Zettelkastenのあり方を反省
主にInboxについて、データの整理が必要だと感じている。今は「知識＝他人や社会一般の考え」と「知見＝自分の考え」が区別できていない。Zettelkastenをアイデアの源泉として捉えるなら、もっと「自分らしさ」がパッと見てわかる構造にしなくちゃだめだ......と思う。

そこで`Inbox`ディレクトリを、次の三つのディレクトリに分割して整理することを検討している。

``` markdown
Inbox // 全体をInboxと呼ぶ
└ ReferenceNotes // KOBOやネット上から拾ってきた知識の断片
└ LiteratureNotes // 自分が抱いている"仮説"
└ PermanentNotes // "仮説"のうち、"自説"と呼べるレベルに定着したもの
```

一方で、Obsidian CEOのノート術を見ると、「そもそもディレクトリで分けること自体が不要」というスタンスみたいだ。「**全てのアイデアはルートに置く**」「**不便と感じるものだけディレクトリを設ける**」というスタンスを徹底している。

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mc3utbg6c22l" data-bluesky-cid="bafyreievu4x2lxivgp3d5sra3eifwd3hdut7vbtmzww54thpewmgihmp74" data-bluesky-embed-color-mode="light"><p lang="ja">www.youtube.com/watch?v=Dq3R...

Obsidian CEOはどのようなノートをとっているか？
 - 基本は&quot;ルートに置く&quot; どこに置くか悩まないスピード感
 - フォルダの代わりにプロパティで整理
 - テンプレートを活用
 - 空ノートはバンバン活用（初めて出てくる人物、着想、知らない事物）
 - メモはアイデアの&quot;源泉&quot; 書き溜めて、振り返り、アイデアとして集約
 - Daily Weekly Monthly Annually と振り返りのサイクルをもつ<br><br><a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mc3utbg6c22l?ref_src=embed">[image or embed]</a></p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mc3utbg6c22l?ref_src=embed">11 January 2026 at 05:43</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>


自分の感想としては、「分かるけど、使いにくいんだよなあ」って感じである。全てをルートに置くと見た目が雑多になる。ノートを追加するたびにタグ付けなどをしっかりできる人ならいいのかもしれないけど、タグ付けって結構苦痛な作業だ。AIとの連携をする上でも利便性が高いこともあり、私は当面ディレクトリ構成を続けるつもりだ。

## Webサイト関係
### 脱出ゲーム「ばななの部屋」を公開
[「ばななの部屋」を"成果物"に追加](https://ivix2020.github.io/my-astro-blog/products/)した。昔作ったシンプルな脱出ゲームで、勘のいい人なら初見でも15分くらいで終わるかも（言い過ぎ？）。「完成させることを目指す」完成主義の実践として作ったものだが、こんなシンプルな作品でも大変だった。
### OGPを調整
私の個人的なWebサイト２つについて、OGPの見え方を工夫した。

**1610 Web**
![1610 Web](./Screenshot%202026-01-12%20at%205.32.53.png)

**1610 garden**
![1610 garden](./Screenshot%202026-01-12%20at%205.35.22.png)

1610 gardenはずっと文字化けしていたのを、日本語で表示されるように直した。
「`quartz.config.ts`の`typography`を日本語対応フォントに変更する」ことが必要だった。
修正には、blueskyでいただいたコメントに助けていただいた。
## その他個人的ニュース
### Youtube Premiumを解約
Obsidianを初めて、Youtubeを外で見たりしなくなった（単純に他のことに時間を使う）。
それに、「知識の頭への入れ方」が変わったことも大きい。私のYoutubeの用途は「知識を音で得る」ことにあったが、それも今ではNotebookLMのスライド資料にする方が、将来的にノートに知識を残す上でも、AIのリファレンスとする上でも有用だと思うのだ。

### AI漫画に興味を持つ
AI漫画[青の箱庭](https://note.com/karaage0703/n/n1e3959a11a22)。藤子不二雄風の安定感ある比率で好きかもしれない。

### Krita AI Image GenerationとKrita Blender Layerを導入

`Krita AI Image Generation`:: Krita上で「落書きをStable Diffusionに完成させる」。
`Krita Blender Layer`::Krita上に「Blenderの3Dモデルの映像をリアルタイム反映」。

この二つはイラスト制作にとても役立つと思う。
`Krita AI Image Generation`だけでも良いが、`Blender Layer`があると、遠近感のある風景など複雑な構成をAIに描かせて構図を検討したり、その修正をするのも簡単になるんじゃないか。

### 気になった投稿など
#### 画風が好き
https://bsky.app/profile/yukikurita.bsky.social/post/3mbtiixynys2j
https://bsky.app/profile/yukikurita.bsky.social/post/3mbtio3pkjs2q
https://bsky.app/profile/1610frms.bsky.social/post/3mbxk4v52gc22

#### 個人的屁理屈
https://bsky.app/profile/1610frms.bsky.social/post/3mbxjxu6etw2g
https://bsky.app/profile/1610frms.bsky.social/post/3mbvmojgck22a
https://bsky.app/profile/1610frms.bsky.social/post/3mbvmgepooc2a
https://bsky.app/profile/1610frms.bsky.social/post/3mbvmarjy5s2a
#### ネット黎明期のワクワク感
https://bsky.app/profile/1610frms.bsky.social/post/3mbwt75d76k2e

#### その他
<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:72nunoxaihpero364c4u7mrg/app.bsky.feed.post/3mc2mjmh7gs23" data-bluesky-cid="bafyreidhsyspx7n7dfitw3psxv27gbivdc6vpyguzcfscbun243kssuqqu" data-bluesky-embed-color-mode="system"><p lang="ja">日本は実は水が少ない国です(ここを誤解している人がとても多いのは気になります)
まず確かに季節によっては降水量は多いのですが、河川面積が少なく貯めにくい上に、勾配も急なので海へと流出するのが早いのです。海水は基本利用できません。これに加えて人口密度が高いため、1人あたりの利用可能な水の量は実は世界平均を大きく下回ります
バーチャルウォーターという概念があります。本来は米にせよ麦にせよ豚や鶏にせよ食糧生産には多くの水を必要とします。日本は多くを輸入に頼っています
つまり日本は食料(家畜の飼料も含む)の形で水を輸入するからどうにか人口を支えられているのです。水輸入国なのです</p>&mdash; 貓村ゐき Nekomura Wiki (<a href="https://bsky.app/profile/did:plc:72nunoxaihpero364c4u7mrg?ref_src=embed">@nekomura-koneko.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:72nunoxaihpero364c4u7mrg/post/3mc2mjmh7gs23?ref_src=embed">10 January 2026 at 17:42</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:72nunoxaihpero364c4u7mrg/app.bsky.feed.post/3mc23iiz3hc26" data-bluesky-cid="bafyreibgpmru76ifap73byykzu3mpcgwqbbnzunpnz275g5oso46pck7gi" data-bluesky-embed-color-mode="system"><p lang="ja">ミッシングリンクが多く根拠は現時点では弱いのですが、日本人は百越の一つの民族が朝鮮半島を経て北九州に定着して、土着の縄文人と混血したものだと私は考えています
中国南部、台湾やあるいはベトナムに親しみを感じやすいのはもしかしたら無意識下の同族感があるのかもしれませんね</p>&mdash; 貓村ゐき Nekomura Wiki (<a href="https://bsky.app/profile/did:plc:72nunoxaihpero364c4u7mrg?ref_src=embed">@nekomura-koneko.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:72nunoxaihpero364c4u7mrg/post/3mc23iiz3hc26?ref_src=embed">10 January 2026 at 12:37</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>