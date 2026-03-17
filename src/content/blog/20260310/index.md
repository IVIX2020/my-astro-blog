---
title: 2026-W11 Blender Geometry Nodesは面白い
slug: "20260318"
description: モックアップをGeometry Nodesで続ける
status: public
pubDate: Mar 18 2026
heroImage: ""
---
## Unity / Blender の進捗
### 出勤前の時間を使い細々とBlenderを触る
もっぱらProceduralがキーワード。ただ、最近は一人時間をあまり持てず、本当に出勤前時間や帰宅後のわずかな時間を使ってやるしかなくなっている。MacbookやPCを触れない時間も理論面での学習や点検に割り当てられているし（楽天KOBOがさっとメモ書きするスタイラスとして大活躍）、やるべきことははっきり明確化されているので、停滞している感はあまりない。

### Pinterestは習慣化しつつある
電車内での空き時間（読書さえも疲れた時）はPinterestを触っている。美しいもの、洗練されたものに大量に触れるというのは、創作についていい影響しかないと思っている。Pinterestは自然とキュレートされているのがいい。`behance`も質は高いけど、あれはそもそも掲載する内容を人が審査しているので、Pinterestのアルゴリズムがすごいと言わざるを得ない。

### モックアップはGeometry Nodesで
Youtube動画「[# プロシージャル技法による背景の自動生成 『1,000の和室』](https://www.youtube.com/watch?v=DLO7ARN9pLI&list=PLsKmecckWZ5qcW8fsIhD1qtMAL2TTk-t6&index=4)」に感銘を受け、Geometry Nodesを使って和室のモックアップを作ることを思いつく。平面図をもとに柱や壁、梁を立ち上げる。あくまでモックアップとはいえ、立体にIDを与えて個別にGNの調整をすることで、バリエーションを与える方針である。おそらく立方体というより、IDを持った中心点を生成することで、GN内で何らかの操作を行うことはできるはずだ。
例えば欄間や障子などもProceduralにすれば、後から全体の美観を意識しながらデザインを変更するなんてこともできる。
<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mgp3aht76c2j" data-bluesky-cid="bafyreibv45dran23husbthzhsxdcv5qq4vhk3ypvlxpjmhknhenlj6m3jy" data-bluesky-embed-color-mode="system"><p lang="ja">procedural に格子を作るblender geometry nodesを作った。便利だけど、細かい意匠など融通きかそうと思ったら大変なので、まあモック用かな...。格子の数などを簡単に変えられるのは便利だが、モディファイアで何とかなってた気がしなくもない...。<br><br><a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mgp3aht76c2j?ref_src=embed">[image or embed]</a></p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mgp3aht76c2j?ref_src=embed">10 March 2026 at 18:39</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

最終的に目指すのは、敷居や壁、柱などの識別用マテリアルが割り当てられた平面図からモックアップを起こし、さらにモックアップのパーツそれぞれを自由にGeometry Nodesで調整できる、本番用のパーツに置き換えて個別に見た目を作り込めるという一連のシステムの構築である。

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mhbtqik7722a" data-bluesky-cid="bafyreiecm65qojdgtrnfvr6aqcjnc5ipkumcxdja2fefrv4awspqo4ewlu" data-bluesky-embed-color-mode="system"><p lang="en">Geometry Nodesを使い、マテリアルを指定した平面図から立体（今はただのマテリアル付きのBOX）を起こす。あとは生成した立体各自にBounding Boxを個別に設定し、欄間なら欄間、鴨居・敷居ならそれ専用のGNに渡して、今のBOXを置き換える。そんなことが出来るかは知らんが（大量にextrudeした各立体を個別に識別・調整する方法が謎、出来なければただのモック兼ガイドにしかならないな）。<br><br><a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mhbtqik7722a?ref_src=embed">[image or embed]</a></p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mhbtqik7722a?ref_src=embed">18 March 2026 at 05:46</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

### Houdiniにも関心はあるが......
Houdini Apprenticeを初めてみる。Blender でいうGeometry Nodesをより詳細に作り込めるようにした感じで、画面上でオブジェクトに対して行った触ったあらゆる操作が記録され、手続型に落とし込まれる考え方の潔さは気持ちがいいほど割り切っていて、可能性を感じる。

ただApprenticeでやる以上は、導入は限定的だ。高い学習コストに見合うだけのリターンとして期待してた**Unityとの連携**が、Apprenticeでは出来ないからだ。

代わりにHoudiniに任せたいのは植生の表現だ。ルールに基づいたTerrainを作って、半自動的に山や植物の環境を作りたい。これはゲームの庭や遠景に使えるはず（ベイクしたとて重くなりそうなので、そこはリメッシュするなりHDRI画像化するなり工夫は必要だろう）。

なぜ植生にこだわるかというと、私にとってゲームにおけるリアリティとは`没入感`だからだ。没入感を生むためには、「映像のディテールレベルに合わせて**不自然な箇所を無くしていく**」必要がある。そのためには「`あるべきところに物がある`」ことが重要となり、例えば植生がそれなのだ。苔が生えるにしても自然なところに生える必要がある。そこでterrainにもプログラム的にシミュレーションする要素が必要になる。

### 物語のタネ
肝心の物語面（あるいは謎解きのギミック面）は放置状態だが、それでもイメージはざっくりと固まっている。

 - 関西が舞台
 - 万博をキーモチーフに使う
 - 親子、家族の物語
 - 日本家屋は自然昭和風（だが庶民的ノスタルジーに寄ったデザインにしたくもない......）
 
 単純なゲーム内のギミックでの謎解きではなく、ある程度の量のテキスト（そしてできればボイス）に支えられた物語ベースの作品になりそうで、物語的な文脈自体を謎解きのヒントとして使いたい。

### 次にやりたいこと
 - 引き続きリアリスティックな和室を一旦完成させる
 - 平面図からモックアップ -> 置き換えシステムを完成

## プライベート
### 英国 PUBで和む
気持ちのいい川沿いの英国PUBに再訪。ピムズを飲む。メニューにあるジェスパーなる謎の植物が話題になるが、どうもジンの「あの味」を作る上で欠かせないものらしい（未知の植物であることに変わりはない）。ジンをあまり美味しいと思って普段飲まないので、あの味と言われてもよくわからない。


## その他気になったこと
<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:lagstf7d2efv7t54sqyzv7jh/app.bsky.feed.post/3mgmmyjvhys2t" data-bluesky-cid="bafyreidygwxinkf353ncvdfz2rezlxjtoo2fvvhkoqcn2o3f5omuvty4q4" data-bluesky-embed-color-mode="system"><p lang="ja">「ミュージカルはなぜ歌うのか？」という問いには、「感情のボリュームが上がるとセリフが歌に変わる」と説明するのが一番分かりやすい。よく歩くだけで歌い出すみたいに茶化されるけれど、実際の作品ではそんな場面はほとんどない。多くの歌は、感情が高まり、言葉だけでは足りなくなった瞬間に生まれるのです。</p>&mdash; ojaly (<a href="https://bsky.app/profile/did:plc:lagstf7d2efv7t54sqyzv7jh?ref_src=embed">@ojaly.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:lagstf7d2efv7t54sqyzv7jh/post/3mgmmyjvhys2t?ref_src=embed">9 March 2026 at 19:19</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

浄瑠璃や歌舞伎と同じですね。

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mgnrcjaadc2x" data-bluesky-cid="bafyreiasfo2ffgh62qybceyh6gcms474n22t72tipvjm6xolnzxx4kkp2i" data-bluesky-embed-color-mode="system"><p lang="ja">基本構造の呼び名<br><br><a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mgnrcjaadc2x?ref_src=embed">[image or embed]</a></p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mgnrcjaadc2x?ref_src=embed">10 March 2026 at 06:09</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

結構覚えてきた。

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mgnres24xs2x" data-bluesky-cid="bafyreidlluqyjc5tsm63wzztfa3neq7rt33idpsc47nniu7gb4b3mrcofq" data-bluesky-embed-color-mode="system"><p lang="ja"><br><br><a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mgnres24xs2x?ref_src=embed">[image or embed]</a></p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mgnres24xs2x?ref_src=embed">10 March 2026 at 06:10</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

まずはこういうのを作りたい

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mgns775ml22j" data-bluesky-cid="bafyreibhcynep2memewiarvs7wzdfhygtvcpfvkar4sfp6jo3wndkqrlvy" data-bluesky-embed-color-mode="system"><p lang="ja">日本の伝統建築（居宅）を曲なりにも勉強してみて、やっぱり和モダンとかってのは表層でしないなと思う。例えばイサム・ノグチとかジョージ・ナカシマとか、多分優れたデザイナーだと思うし美しいなとは思うけど、仮にそれらのproductを、鉄筋造の縦向きのベクトルに生えるように立ち、人間を安全で快適な箱で包むことに執心する現代建築の中に並べたとて、水平で、深い庇の下にあって、廊下がむしろ自然に対して開かれて伸び、横側からの自然光を取り入れ、それ自体が自然素材に拘る伝統的な日本建築の美学とは全く別のものだ。表層を西洋視点でリフレーミングして、偶然のモダン的要素を”見立てた”感じで、切り花ですらないと思う。</p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mgns775ml22j?ref_src=embed">10 March 2026 at 06:25</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

和の簡素さと、現代デザインのシンプルは案外相容れない。

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:2qr4lgdjbh5f6qwbfp24nvlc/app.bsky.feed.post/3mgqpnf6eu22p" data-bluesky-cid="bafyreidyt57euih6jglzrlcu4lqs5ignnahvzh2znw6qhhuar45bn6hwcq" data-bluesky-embed-color-mode="system"><p lang="ja">Claude Code、/btwでオフトピックな話をできるらしい<br><br><a href="https://bsky.app/profile/did:plc:2qr4lgdjbh5f6qwbfp24nvlc/post/3mgqpnf6eu22p?ref_src=embed">[image or embed]</a></p>&mdash; akr (<a href="https://bsky.app/profile/did:plc:2qr4lgdjbh5f6qwbfp24nvlc?ref_src=embed">@akr.physalis.net</a>) <a href="https://bsky.app/profile/did:plc:2qr4lgdjbh5f6qwbfp24nvlc/post/3mgqpnf6eu22p?ref_src=embed">11 March 2026 at 10:17</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

こういう裏技は楽しいね。

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mgsqqaokhc2n" data-bluesky-cid="bafyreihkvz5wij55ct33abcxyuu2ikwdulnnguejtawqgluqjb5mdkjcny" data-bluesky-embed-color-mode="system"><p lang="en">my9games.com/s/8f07e6e864...<br><br><a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mgsqqaokhc2n?ref_src=embed">[image or embed]</a></p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mgsqqaokhc2n?ref_src=embed">12 March 2026 at 05:42</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

案外任天堂一択だった。

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mgsssrzplc2x" data-bluesky-cid="bafyreidp3tenrwb4axvd6mb3yekiqpzxzzjkuiinzbgi3csphk2pwlv344" data-bluesky-embed-color-mode="system"><p lang="ja">Houdiniに可能性を感じて、Houdini Apprenticeを触ってみる。
たんぽぽの綿毛を作ってみました。https://3d.crdg.jp/tech/archives/6422<br><br><a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mgsssrzplc2x?ref_src=embed">[image or embed]</a></p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mgsssrzplc2x?ref_src=embed">12 March 2026 at 06:19</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

簡単なような難しいような。

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:yp3xkkg4jjnyqrkvk2r3gk3r/app.bsky.feed.post/3mgsvgx55rc24" data-bluesky-cid="bafyreie6wulnq4kzmiu2g5hmqqky5awy62zuzyj4jfgwynjec72k3k64cu" data-bluesky-embed-color-mode="system"><p lang="ja">日々の植物🌱 #flower #bloomscrolling
ハナモクレン
白い鳥のような白波のような<br><br><a href="https://bsky.app/profile/did:plc:yp3xkkg4jjnyqrkvk2r3gk3r/post/3mgsvgx55rc24?ref_src=embed">[image or embed]</a></p>&mdash; さぶsabu (<a href="https://bsky.app/profile/did:plc:yp3xkkg4jjnyqrkvk2r3gk3r?ref_src=embed">@sabuhaotaku.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:yp3xkkg4jjnyqrkvk2r3gk3r/post/3mgsvgx55rc24?ref_src=embed">12 March 2026 at 07:06</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mgswtlabtk25" data-bluesky-cid="bafyreibyz5kpnn7ahjleyyhoa23t3enjzlmof7efvecfljqqpeqrog2bui" data-bluesky-embed-color-mode="system"><p lang="en">もう木蓮の季節か</p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mgswtlabtk25?ref_src=embed">12 March 2026 at 07:31</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

うちの近所にも咲いてます。元気でまっすぐ上を向いている。

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mgtj5e3jsv2p" data-bluesky-cid="bafyreic2b5tzesqxomme6d3q4foacg72xy3eog6m6k3e45q5osbats2n4i" data-bluesky-embed-color-mode="system"><p lang="">私にとってゲームにおけるリアリティとは没入感だ。没入感を生むためには、映像のディテールレベルに合わせて不自然な箇所を無くしていく必要がある。そのためには物があるべきところにあるといった要素も重要になる。例えば植生がそれで、苔が生えるにしても自然なところに生える必要がある。そこでterrainにもプログラム的にシミュレーションする要素が必要になる。</p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mgtj5e3jsv2p?ref_src=embed">12 March 2026 at 12:59</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:72nunoxaihpero364c4u7mrg/app.bsky.feed.post/3mh36tr3bos2j" data-bluesky-cid="bafyreie5mv5atgoet4tj3r45t27nfbkurynibsdmxgwh5ciges3did56vi" data-bluesky-embed-color-mode="system"><p lang="ja">同僚のAI利用で「データを直接生成するのではなく、データを生成するコードを生成すれば良い」「データを生成するマークアップを生成するコードを生成すれば良い」という着想によるものがあり、私はこれを非常に高く評価しています

そもそもデータの圧縮とは何か？ということを突き詰めると、圧縮とは元のデータの持つ情報を再現する短い符号列を得ることである、と述べることができます。
つまり彼の「生成するコードを得る」とはLLMにとって扱いやすいある種の情報圧縮をしていると言うことができます。

加えて、コードは正しく動かなければ動かないという事実を突きつけることでAIはそれをコンテクストに加えられます</p>&mdash; 貓村ゐき Nekomura Wiki (<a href="https://bsky.app/profile/did:plc:72nunoxaihpero364c4u7mrg?ref_src=embed">@nekomura-koneko.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:72nunoxaihpero364c4u7mrg/post/3mh36tr3bos2j?ref_src=embed">15 March 2026 at 14:16</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

AIと人間の間には両者が理解できる中間地点が必要。

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:w53lkqbynr7up43cnyrld2i3/app.bsky.feed.post/3mh5vkl3wtk2g" data-bluesky-cid="bafyreibety46mgfyoo3eygeom3booohg2cll6vyrdbek47cflfjb7v2uoi" data-bluesky-embed-color-mode="system"><p lang="ja">最近かどうかはわからないのだけれど、Steamのレビューを見ていると、ユーザーの物語に対するストレス耐性がいい加減下がりすぎであると感じることが多くなったなぁ。
「序盤は胸糞展開が続くので、セリフは全部スキップするといいです」とか、「爽快アクションなのに後半難しい話をしたので減点です」とか、幼稚か、幼稚なのか！？

全てのユーザーに向けてゲームを作ろうとすると、表現がどんどん堕落するというのがよくわかるなぁ。</p>&mdash; わんわんお (<a href="https://bsky.app/profile/did:plc:w53lkqbynr7up43cnyrld2i3?ref_src=embed">@wanwano.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:w53lkqbynr7up43cnyrld2i3/post/3mh5vkl3wtk2g?ref_src=embed">16 March 2026 at 16:08</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>