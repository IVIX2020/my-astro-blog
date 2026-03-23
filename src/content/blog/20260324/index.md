---
title: 2026-W12 ずっと行きたかった名建築「聴竹居」
slug: "20260324"
description: 訪れたかった場所を訪れて大いに霊感を刺激される
status: public
pubDate: Mar 24 2026
heroImage: ""
---
## BlenderはProceduralを勉強中
### かなり様になってきた
Geometry Nodesはかなり上手に扱えるようになってきた。グループノードを抑えるだけで、単純に煩雑さから解放された結果として、無理なくやりたいことを実現できるようになった。Pinterestによる素材研究も含めていい具合にルーチン化していて、ガツガツ一箇所のトンネルを工事中というわけではないが、まるで彫刻を掘り出すように少しずつ、いろんな方面からプロジェクトを進められている感じがする。

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mhbtqik7722a" data-bluesky-cid="bafyreiecm65qojdgtrnfvr6aqcjnc5ipkumcxdja2fefrv4awspqo4ewlu" data-bluesky-embed-color-mode="system"><p lang="en">Geometry Nodesを使い、マテリアルを指定した平面図から立体（今はただのマテリアル付きのBOX）を起こす。あとは生成した立体各自にBounding Boxを個別に設定し、欄間なら欄間、鴨居・敷居ならそれ専用のGNに渡して、今のBOXを置き換える。そんなことが出来るかは知らんが（大量にextrudeした各立体を個別に識別・調整する方法が謎、出来なければただのモック兼ガイドにしかならないな）。<br><br><a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mhbtqik7722a?ref_src=embed">[image or embed]</a></p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mhbtqik7722a?ref_src=embed">18 March 2026 at 05:46</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

和室モックアップは結構形になってきた。ただし置き換えはGNを適用してから手動でやらなければならない為、値を調整しながら美観を突きつける使い方には至っていない。値をがら検討できるのは障子のマス目の数などよりはもう少しラフな次元の調整、例えば柱の高さや太さ、位置などだけだ。
GNの欠点は見た目が煩雑になることだ。例えばmaterial selectionで三つのマテリアルを持つオブジェクトに操作したい場合、material selectionノードを3つとorノードを2つの計5つのノードが必要になる。解決策としては予め3つ程度のマテリアルをboolで判定するグループノードを作っておき、組み合わせることだろう。こういう細々した自作グループノードを作り溜めないとすぐに煩雑になる。

### 聴竹居の感想
今週は何といっても京都の建築聴竹居を訪れたことが全てだ。

### 聴竹居のため大山崎駅へ
阪急京都線、京都河原町駅までの中間にある大山崎駅にて下車、藤井厚二の名建築「聴竹居」へ。山道を少し上がったところ、建築当時はいざ知らず、現在は品のいい住宅街の中にあって、駅から降りる前は一見ただの京都市街から離れた田舎なのだが、立ち寄る前の散策として行基創建と伝わる「宝積寺」に向かう道すがらにも寺社が４つも５つもあって、沿道の家並みの佇まいからしても、歩いていて「ああ、京都に来た」と感じさせる。

### 聴竹居と「藤焼」
戦前の藤井厚二が第４回建築まで増築を重ねて作った最後の居宅で、待合のほか本屋と茶室を主にみた。当日は彼のオリジナルの焼き物も同時に展覧されていた。「藤焼」と称する独自のもので、あくまで建築が目当てながら私は面白く見た。雀、鼬、雁、鶴など数々の動物がモチーフとなっており、「愛らしい」が第一印象だ。相方は藤焼の陶器彫刻全般に関心はないらしいが、茶碗など日用品には可愛い、ほしいと感動していた。家で買ったものと似ていると思ったら、どうも京都の「清水焼」の陶工に作らせたようだ。

### 実験住宅の間取り
少なくとも聴竹居は純和風建築とは言い難い。実験建築で、家の作りは全く本来の日本建築の伝統に則っていない。例えば間取り。縁側、廊下がない。日本の家屋の特徴は縁側という「外と内の中間地点」があって、廊下が内側の動線として玄関から入った人を導く仕掛けになっていて、つまり居間にしろ客間にしろ、縁側や廊下に囲まれるようにしてあるのが普通だ。一方で聴竹居は内開きの開戸の玄関を開ければまっすぐ居間に繋がるという西洋的な作りで、玄関を上がってすぐの空間をのぞいて廊下と呼べるものが短い、あるいは無いに等しい。縁側と呼ばれるスペースもあるにはあるが、いわゆる沓脱石から上がれるようになった縁側とは全く違って、三方ガラス張りの、一間か一間半程度の幅の小さな空間で、西洋のサンルームと呼ばれる感覚に近いという。

### 和洋折衷とも違う独自性
和洋折衷という言葉があるが、一般に想起されるそれとも違う、と思った。様式としての西洋建築には一切関心がない気がする。どちらかというと、伝統と近代との融合を図った感じである。たまたま西洋がひと足さきに近代的で、日本人が西洋的＝近代的として文化を模倣的に取り入れたために、西欧化と近代化は混同されがちだが、所々の設計が近代的（ときにそれを超えて現代的だとさえ思った）に映るのは、藤井が合理性を突き詰めた結果だったと思う。

### 合理性
藤井の合理性は行き届いていて、例えば風呂を沸かす釜は薪を入れる口が、しゃがみながら入れなくて済むよう高いところに配置されていて、さらに薪も入れやすいよう隣り合った家屋には薪を溜めておくらしい扉があって、その高さも口のところにあっていた。一般的な作りとはまるで違う床の間では、掛け軸をスライドできるようになっている。どういうことかというと掛け軸を掛けるフックは数十センチほどのレールに取り付けられていて、掛けたまま横方向に位置を調整できるようになっている。床の間は横に長いため、いくつかの装飾を同時に飾ったに違いないが、それを細かく調整できるようにしてあるわけだ。

### 居心地の良さ
聴竹居は居心地がいい。理由は、おそらく藤井自身が家族や使用人と晩年を過ごしながら改善していった場所だからというのもあるが、１つは、上記の合理主義に支えられた一貫性のため、設計に無理がないからだ。建築として工夫を重ねると、ただ奇を衒うだけの「マニア」になりかねないが、藤井の建築は例えば川の冷気を地下のトンネルから取り込んだり、縁側の天井にも換気扇があったりとかなり凝ったものながら、無理のない設計のため見ていて疲れさせない。それは単にミニマルだから疲れさせないというのではなく、そもそもミニマルかというとそうではなく、むしろ意匠が目につく方だと思う。例えば４５度で構成された椅子にしてもそうだし、ダイヤモンドのような形の備え付けの照明にしてもそうで、また壁同士が直角に出会うところを半円でくり抜くようにしたりと、一歩間違うと建築家の計らいが鼻につく感じになりかねないところ、いいバランスで抑えている。
もう１つは適度な軽みだ。これも軽佻浮薄になりかねないところを、上手に日本建築の伝統の延長線上に収めている。空間の通りの良さから来るところは大きいだろう。文字通り居間や客間、食事室が隣り合い、例えば居室は作業机の横の窓が縁側と繋がっているし、食事室は居間と対角線上に溶け合うように並んでいて、また厨房から直接食事が出せるよう小窓がついている。全体にガラスをうまく使っていて、特に縁側では外からの視線を遮りつつも、障子と違いに直接的に光を中へ伝えるその性質を大々的に使っている。そして気候との無理のない協調だ。吉田兼好の`家のつくりやうは、夏をむねとすべし`を独特な地下や天井の換気口をもって実践しつつ、サンルーム代わりの縁側は密閉率が高く、冬でも縁側のように冷たくはならないだろう。天井をはじめとして網代が多用されていて、それがバリ風のリゾートを想起させるらしく、相方曰く「リゾートと和は相性がいい」だが、これは数寄屋造から継承される歴とした和の伝統でもあり、要するに技術は伝統のものを組み合わせているが、組み合わせの仕方で新しい空間を作っているのだ。厳選した竹や熱を加えて少しずつ曲げたという竹の曲線など細部のこだわり並々ならぬ聴竹居にあって、こうした創意工夫の自由闊達さが重くなりすぎない、いる人を緊張させない居心地につながっているのだと思う。

### ゲームへの影響
家の設計にはその人の人格が出る。例えば増築部分だけその代の持ち主の意匠が反映されているだとか、風呂好きの亭主が月が見れるように高い位置に窓をつけたりだとか、何でもいいが、個人の趣味や家族の事情が垣間見れる要素が所々あることで、プレイヤーはそこにいなくとも、家主について想いを巡らせることができる。聴竹居ではまさにそのことを実際に体験できたので、かなり励みになった。
聴竹居は「モダン建築の先駆け」だが、私がゲームで表現したいのはもう少し庶民寄りというか、一般的な「昔の家」だ。しかし聴竹居の居心地の良さは衝撃的で、ああいう建築家の家ならではの凝った構造は取り入れる気はないが、様式としての伝統に拘るのはやめようと思った。表現したいのは、当時の「少し洒脱でモダンな」人が住んでいたお家で、現代の日本人である我々にとっても居心地の良いものでないといけない。
聴竹居ではいくつか気に入ったところがあるから、それは何かしら取り入れたい。

 - 網代の天井や家具
 - 子作りな家具や表具の取手
 - ダイニングテーブル
 - 統一感のあるソファと椅子（和室だけではかえって不自然だ）
 - 「当時のモダン」な意匠のガラス窓付きの内開き扉
 - 芸術を飾る場としての床の間
 - 客を招くことを前提としていた伝統的社交環境としての家
 - 「となりのトトロ」風に円形窓で薄い壁がくり抜かれ、家族が窓越しに存在を確かめ合える空間

## その他気になったこと
<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:72nunoxaihpero364c4u7mrg/app.bsky.feed.post/3mh36tr3bos2j" data-bluesky-cid="bafyreie5mv5atgoet4tj3r45t27nfbkurynibsdmxgwh5ciges3did56vi" data-bluesky-embed-color-mode="system"><p lang="ja">同僚のAI利用で「データを直接生成するのではなく、データを生成するコードを生成すれば良い」「データを生成するマークアップを生成するコードを生成すれば良い」という着想によるものがあり、私はこれを非常に高く評価しています

そもそもデータの圧縮とは何か？ということを突き詰めると、圧縮とは元のデータの持つ情報を再現する短い符号列を得ることである、と述べることができます。
つまり彼の「生成するコードを得る」とはLLMにとって扱いやすいある種の情報圧縮をしていると言うことができます。

加えて、コードは正しく動かなければ動かないという事実を突きつけることでAIはそれをコンテクストに加えられます</p>&mdash; 貓村ゐき Nekomura Wiki (<a href="https://bsky.app/profile/did:plc:72nunoxaihpero364c4u7mrg?ref_src=embed">@nekomura-koneko.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:72nunoxaihpero364c4u7mrg/post/3mh36tr3bos2j?ref_src=embed">15 March 2026 at 14:16</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mhjkjx6ovc2k" data-bluesky-cid="bafyreialgspat3lc4xmbpfqoxd6eaeduw5cwext6an3iwjstnoghzffoly" data-bluesky-embed-color-mode="system"><p lang="en"><br><br><a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mhjkjx6ovc2k?ref_src=embed">[image or embed]</a></p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mhjkjx6ovc2k?ref_src=embed">21 March 2026 at 07:22</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>
my 9 *** 系にハマる。情報を絞るっていいな。大事だな。

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:lagstf7d2efv7t54sqyzv7jh/app.bsky.feed.post/3mhmejtcsuk2h" data-bluesky-cid="bafyreifpog2xzekbbaa63ygyh7h2sgspit4ljzropumqjlilhfmjyqctmu" data-bluesky-embed-color-mode="system"><p lang="ja">これ、クリエイターだけじゃなくて日本の製造業も同じ構造なんだよな。「安くしないと売れない」と思い込み、「安くないと買わない」市場ができる。その結果、価値じゃなくて価格でしか勝負できなくなる。
最初から値段をつけて戦うしかない。<br><br><a href="https://bsky.app/profile/did:plc:lagstf7d2efv7t54sqyzv7jh/post/3mhmejtcsuk2h?ref_src=embed">[image or embed]</a></p>&mdash; ojaly (<a href="https://bsky.app/profile/did:plc:lagstf7d2efv7t54sqyzv7jh?ref_src=embed">@ojaly.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:lagstf7d2efv7t54sqyzv7jh/post/3mhmejtcsuk2h?ref_src=embed">22 March 2026 at 10:13</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:72nunoxaihpero364c4u7mrg/app.bsky.feed.post/3mhmjii55uc2q" data-bluesky-cid="bafyreibznriefurtg3mensvwc4bev2nhgj2fofsk2j7q35msr6xts6yg6a" data-bluesky-embed-color-mode="system"><p lang="ja">英語は学校の授業時間(中高6年で700から800時間)で身につけるのはどんな天才でも不可能

日本人が英語を十分なproficiencyで身につけるには最低でも2000時間以上は必要と言われている

だから授業外で授業の倍以上やらんと身につくわけがない。ただしそれには時間もお金もかかる

学校が悪いわけでも各人が悪いわけでもない</p>&mdash; 貓村ゐき Nekomura Wiki (<a href="https://bsky.app/profile/did:plc:72nunoxaihpero364c4u7mrg?ref_src=embed">@nekomura-koneko.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:72nunoxaihpero364c4u7mrg/post/3mhmjii55uc2q?ref_src=embed">22 March 2026 at 11:42</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:72nunoxaihpero364c4u7mrg/app.bsky.feed.post/3mhmh5doxhs2q" data-bluesky-cid="bafyreicysogjc6lq7wvpe6ggl2i6nm4urfeptjj7icblzmrynb7jmbcv4i" data-bluesky-embed-color-mode="system"><p lang="ja">真面目な話、英語を話すなど外国語を話すというのは語彙の選択や構文の選択が自動化されているということである

例えばだけども、これ何？はWhat is this?ってみんな即座に言えるでしょ。日本語を考えてからではなくて英語でダイレクトに。
こういう瞬間的な「ええっと構文はこれで、単語はこれで」という操作を必要としない意味の塊を瞬時に思考を介さずに取り出すのが外国語を話すということで、反復して練習する以外に習得法は存在しない

やっていくうちに文の先頭や主語の言い方のパターンは身についてきて、そこからは脳が勝手に入力補完のように次を補完してくれるようになる。知らないパターンだとこれが止まる</p>&mdash; 貓村ゐき Nekomura Wiki (<a href="https://bsky.app/profile/did:plc:72nunoxaihpero364c4u7mrg?ref_src=embed">@nekomura-koneko.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:72nunoxaihpero364c4u7mrg/post/3mhmh5doxhs2q?ref_src=embed">22 March 2026 at 11:00</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

