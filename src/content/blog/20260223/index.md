---
title: 2026-W07 Blender/Unityを本格稼働
slug: "20260219"
description: 'Blender/Unityを本格稼働。次作への構想が固まってくる'
status: public
pubDate: Feb 19 2026
heroImage: ""
---

## Unity / Blenderの進捗
花札と日本的建築・庭園を動機とした次作の名称を「四季連関の花庭」と仮に名付けた。題目が決まってしまうと、やるべきことが明確化され、学習も捗った。詰まるところ、次作と軸となる動機ははっきりしている
1. 植生、特に四季を表現する花
2. すっきりした直線で構築された建具
3. 和紙(陰影の表現)、木目、
4. 洗練されたデザイン(花札自体は無論、表具や欄間の飾り)
見せ方は決まっていないが、恐らくは空間を行き来する方式を採用するし、ズームアップを多様することになりそうだから、LODを高度に活用しながら、詳細度レベルの高い作り込みが必要になると思う。１つの心地よい空間の為に統合された小道具の、細部への耽溺、それこそがUXの軸になるからだ。
いずれにしろ、当面はモデリングとマテリアル（シェーダー）の作成に打ち込みたい。
### 音空間について学ぶ (Audio Mixer Group)
というわけで、Unityのサウンドシステムについて少しだけ学んだ。`Audio Mixer Group`と呼ばれるもので、空間中の音源をグループにまとめることで、効率的にエフェクトを掛けることができる。例えば`Ambience FX`と`Amb Fx Rev`というグループがあるが、どちらも環境音を扱うグループながら、前者に対して後者はリバーブがかかっているから、Unity上でAudio Resource を追加したときに、どっちのAudio Mixer Groupに加えるかはとても重要となる。「聞こえて心地いい音」「進行的に重要な音」「リアリズムに則った音」のみを鳴らす為には、もう少し工夫が必要で、サウンドエンジニアリングとも呼ぶべき、colisionによるSwitchを多様したコードが必要になると思う。学ぶべき余地は大変多い。
### URPの検討
まだ理解が及んでいないので、考えを変えるかもしれないが、HDRPではなく、URPで作ることも検討している。理由はユーザーへのスペック要求を下げることの他、HDRPに対する懸念のためだ。つまり、物理的に正確であるがゆえに、それがかえって自由な表現の足枷になりはしないか、オーバースペックになりはしないか、という懸念だ。その点URPは工夫次第でPhoto Realisticをある程度維持しつつ少しアレンジを加える、といった自由度がきく......ような気がしている。これは目指す表現にもよるだろうし、今のところ絵作りが定まってない以上、保留にせざるを得ない。
### 入道雲
HDRP vs URPの話に繋がるが、HDRPの`Volumetric Clouds`では入道雲をうまく再現できなかった。物理的精密性に凝るのはいいが、映画が作りたいわけでもないので、やはり欲しい場所に欲しい形の雲を置きたいという気持ちがある。というわけで他の方法で入道雲を表現しようと考えたわけだが、小一時間調べてもいい方法がわからなかった。多分、調べた感じだと専用のシェーダーを作るのがいいかもしれない。
### 風で揺れる草
Unity上で風で揺れる草を作った。`Shader Graph`を使った方法で、板ポリを使った基礎中の基礎の方法ながら、モデリングを使った場合にも応用はできそうだし、ノイズを工夫することでよりリアリスティックに揺らすことはできそうだ。
<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mffpmhllsk22" data-bluesky-cid="bafyreidjzejbggoqlditaf4lkidjcfjvsrzgzoyyzf6trbrpfndmfukk4u" data-bluesky-embed-color-mode="system"><p lang="ja">キホンのキですがUnity Shader Graphで揺れる草を再現するチュートリアルを学び直し。

1. Gradient Noiseをもとに特定方向への揺らぎを生成
2. LerpによってUVのV方向(草のテクスチャ縦軸)が上に向かうほど蒸気揺らぎを反映させる

これが基本。

正直最後のTransformはよくわからんが、今回のようなTexture素材にとっての横軸方向を問題とする場合はObjectに変換しておけば良さそう。<br><br><a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mffpmhllsk22?ref_src=embed">[image or embed]</a></p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mffpmhllsk22?ref_src=embed">22 February 2026 at 07:52</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

### Splineを触る
Unity上でSplineを触った。`Spline Animate`と`Spline Instantiate`を使って、稲荷大社のような千本鳥居を光が通り抜ける、というちょっと奇妙なデモを作ってみた。Splineはまだまだ掘り下げようがありそうで、Splineに沿って道を作ったり（和風庭園なら庭石を置いたり）、
## 摩耶山と梅の庭
職場の同僚と久々に会って摩耶山を登った。楽しかった。やっぱりゲーム製作ばかりしているとストレートネックにもなるし、こうした束の間の自然はすごく気分転換にもなるし、普段満たされない心の栄養を得られた感じがする。時間にして４、５時間歩いたが、運動不足もあり少しだけばてたものの、体力はまだまだ維持できていることを確認できた。今週は近場に梅も見に行って、これもまたいい時間だった。

## 雑感
### 音空間の作り込みの大切さ
これはエフェクトをかける負荷を分散する上で必須の技術であると同時に、そうしたエンジニアリングを超えた、表現の可能性を秘めていると思う。詰まるところ、どんなにモデリングが簡素でも音空間が作り込まれてRichならば、そこに存在している感覚を与えることができるし、その逆もまた然り。
私の思う音空間の心地よいゲームの最上は20年前に発売された`ゼルダの伝説　時のオカリナ`だ。任天堂の音空間はとても作り込まれていると思う。水の中を泳ぐ音や、草をかき分ける音。決してディテールがあるわけじゃないし、むしろ当時の技術的に圧縮され、単純化されていると思うが、当時の作品は無論、現在の作品と比べてさえも、何かがこの音空間を特別にしている。もしかしたら音のキャラクターともいうべきものが、単純化されているが故にかえって統一感を生んでいるのかもしれない。[^1]
とにかく、和室と自然（庭）を表現する以上、音というのは絶対的に大事だ。もしかしたらモデリングを作り込む手間があったら、音を１つ追加すべき、というくらい多分大事で、特に私の次作に関してはテーマ的に動きが少なくミニマルな画面になるから、それだけに映像美を支えるだけの音表現が必要になると思う。
### 非効率で不毛な作業に苛立つ
仕事の愚痴にはなるが、上司の方針で非効率としか思えない作業にあたる時間があり、苛立ちを覚えた。元々うちの職場はあまり技術導入に熱心とは言いがたく、普段からコンピュータを触る上でギャップを感じることは多いのだが[^2]、今回は根本の考え方の違いで、というよりほとんど生き方に対する哲学感の違いなのだ。上司は多分、私の勝手な見立てでは、丁寧なのを無条件に素晴らしいと考えているようで、私はその反対なのだ。人間が丁寧さを求められる局面ではより良い方法を仕組み化できないか検討すべきだと思う。人間の「楽をしたい」という気持ちは結構大事で、要するにそれは退屈＝単調な作業だからであり、単調な作業の裏には必ず改善の余地があるはずなのだから[^3]。

## その他気になったこと
<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mesnzj4uqf2m" data-bluesky-cid="bafyreidx2u3xjny6uwzblj7izxhddpw3hwqusbfxi6bdbdkrqi43gwgeri" data-bluesky-embed-color-mode="system"><p lang="">Unityの音空間を練習。
前作ったゲームでは全く意識していなかったが、音を作り込む方が、下手にリッチなビジュアルに凝るよりコスパ良く臨場感を高められそうだ。
Audio Mixer Groupを使う。Audio Mixer Group ウインドウでグループごとのエフェクトを編集できる。Ambience グループは重要だ。その配下にあるAmbience FXとAmb FX Revは後者のみリバーブが効くので使い分ける。</p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mesnzj4uqf2m?ref_src=embed">14 February 2026 at 18:03</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3meso6xhl372a" data-bluesky-cid="bafyreiglr7pfcbg2ngl3icxcacuqnfzyz77r5pacw56ogg5syobyetm7re" data-bluesky-embed-color-mode="system"><p lang="">Splineを触った。いわゆるベジェ曲線。
Spline Instantiate は道路などのパーツを曲線に沿って並べることができる。
Spline Animate はオブジェクトを曲線に沿ってアニメートできる。
前者はランダムにRotationやScaleを変えることができる。
試みに稲荷大社の千本鳥居を再現してみた。</p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3meso6xhl372a?ref_src=embed">14 February 2026 at 18:06</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mesocmc2qe2h" data-bluesky-cid="bafyreie3s6fgma7eqp2mhk4gmgppeddqsn4ulbyftxt2i25xrhyvqzasky" data-bluesky-embed-color-mode="system"><p lang="">入道雲を表現したいのだが、HDRPのVolumetric Cloudsは空全体にかける仕様で、使い勝手が悪そうだ。もう少し雲を個別にデザインしたい場合はシェーダーが必要なのかな？あまり重いのは嫌だが、雲から漏れる光条とかは好きな表現なのでこだわりたいが、そこまでリッチにするのはそもそも本意ではないかもしれない。</p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mesocmc2qe2h?ref_src=embed">14 February 2026 at 18:08</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:w53lkqbynr7up43cnyrld2i3/app.bsky.feed.post/3mctsug42ks2g" data-bluesky-cid="bafyreifyxiwpkbuauglfqiemomdm3jiddxb5ttdspyznx5e6734kbpuq2m" data-bluesky-embed-color-mode="system"><p lang="ja">海の向こうって、LLMに対しては、「著作権という決まり」を侵犯したことに対して怒りを抱いているのではなくて、アーティストの人権、生活権を侵犯したことに対して怒りを抱いているのだと思っていて。

向こうの著作権順守レベルはかなりふわふわ。
今日もライアン=ホリディ(ストイシズムを生産性のテクニックに墜として大儲けした人。著者で書店のオーナでもある。)が、「本が買えない？海賊版で入手せよ！！」と動画で明言していて。
格差と貧困の程度がすさまじいので、「経済的状況が許さないなら著作権を侵犯しろ」というのはもうほぼほぼ社会規範。
とくにアメリカは、法律と民衆のモラル規範の二つが並行して走っている社会。</p>&mdash; わんわんお (<a href="https://bsky.app/profile/did:plc:w53lkqbynr7up43cnyrld2i3?ref_src=embed">@wanwano.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:w53lkqbynr7up43cnyrld2i3/post/3mctsug42ks2g?ref_src=embed">20 January 2026 at 18:12</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:w53lkqbynr7up43cnyrld2i3/app.bsky.feed.post/3mevcbuytis2s" data-bluesky-cid="bafyreief6xwnp3mojcp4xxf3ooiukrrvmlrexg2fmucppkaft5uhususju" data-bluesky-embed-color-mode="system"><p lang="ja">そろそろ頃合いだと思って、Instagram やTikTokにもちょぼちょぼ投稿しているのですが、、、。
Instagramくん、Threadsの投稿も普通におすすめしてきて。それが全部が全部、そうですね、、、娘さんを自殺で亡くされたお母さんの悲痛な叫びとか、そういう投稿ばかり。
「これなら貴方は反応せざるを得ないでしょう？」という邪悪さ。
だめだ。分かっていたけれど、meta社もあかん。</p>&mdash; わんわんお (<a href="https://bsky.app/profile/did:plc:w53lkqbynr7up43cnyrld2i3?ref_src=embed">@wanwano.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:w53lkqbynr7up43cnyrld2i3/post/3mevcbuytis2s?ref_src=embed">15 February 2026 at 19:11</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:ntlp6xyx24ai3r7xaavx2bsj/app.bsky.feed.post/3mez7267ues2l" data-bluesky-cid="bafyreieysf555zhtpbzc4fy5tfkwhq4jdzsgcjlzmurudkngyq67arpjsu" data-bluesky-embed-color-mode="system"><p lang="ja">カメラ散歩
@botanical.bsky.social<br><br><a href="https://bsky.app/profile/did:plc:ntlp6xyx24ai3r7xaavx2bsj/post/3mez7267ues2l?ref_src=embed">[image or embed]</a></p>&mdash; biba (<a href="https://bsky.app/profile/did:plc:ntlp6xyx24ai3r7xaavx2bsj?ref_src=embed">@biba02.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:ntlp6xyx24ai3r7xaavx2bsj/post/3mez7267ues2l?ref_src=embed">17 February 2026 at 08:24</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mf6mxoywt22f" data-bluesky-cid="bafyreieir76lxpfyj2lu53qxrfbk6o6i5r7ed4j5dzjofpe2zjifxginny" data-bluesky-embed-color-mode="system"><p lang="en">AIをどう整備しようが、クリエイティブな業界へのインパクトは避けられない。アラがあるとはいえ人間の表現力を再現する装置が発明されてしまった以上、それを使う使わないに関わりなく、鑑賞者の感動が目減りすることは不可避だし、それを間違っていると言い張ったところでどうにもならない。</p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mf6mxoywt22f?ref_src=embed">19 February 2026 at 12:16</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:25psnr776jluhuziijad7sqj/app.bsky.feed.post/3mfc7ysh3zk2r" data-bluesky-cid="bafyreihpqrw4jftctbhln2t3yjf25qplto3wwu2per7qd33tsfyytj4ymm" data-bluesky-embed-color-mode="system"><p lang="en">今日やっと撮れたウメヒヨ
ヒヨドリが蜜を吸うのに夢中だったので割と近くまで寄れてゆっくり撮らせてもらえました(^^)
#野鳥 #birds #ヒヨドリ #梅<br><br><a href="https://bsky.app/profile/did:plc:25psnr776jluhuziijad7sqj/post/3mfc7ysh3zk2r?ref_src=embed">[image or embed]</a></p>&mdash; 青いカワセミ (<a href="https://bsky.app/profile/did:plc:25psnr776jluhuziijad7sqj?ref_src=embed">@kawasemi201.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:25psnr776jluhuziijad7sqj/post/3mfc7ysh3zk2r?ref_src=embed">20 February 2026 at 22:36</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mffpmhllsk22" data-bluesky-cid="bafyreidjzejbggoqlditaf4lkidjcfjvsrzgzoyyzf6trbrpfndmfukk4u" data-bluesky-embed-color-mode="system"><p lang="ja">キホンのキですがUnity Shader Graphで揺れる草を再現するチュートリアルを学び直し。

1. Gradient Noiseをもとに特定方向への揺らぎを生成
2. LerpによってUVのV方向(草のテクスチャ縦軸)が上に向かうほど蒸気揺らぎを反映させる

これが基本。

正直最後のTransformはよくわからんが、今回のようなTexture素材にとっての横軸方向を問題とする場合はObjectに変換しておけば良さそう。<br><br><a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mffpmhllsk22?ref_src=embed">[image or embed]</a></p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mffpmhllsk22?ref_src=embed">22 February 2026 at 07:52</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:5hvzk55bxjnelww6hdzzfqmq/app.bsky.feed.post/3mfftiycejs27" data-bluesky-cid="bafyreidscypi5ctfmytiwyotpbty5wp25ptic7xseisq6z3ioneiboehom" data-bluesky-embed-color-mode="system"><p lang="en">Empty objectの小要素に子要素として持たせる場合、親にmesh renderer がないと怒られる。LOD Group コンポーネントを親に入れると描画されるようになる。</p>&mdash; 1610 紅燈 (<a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq?ref_src=embed">@1610frms.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:5hvzk55bxjnelww6hdzzfqmq/post/3mfftiycejs27?ref_src=embed">22 February 2026 at 09:02</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:ntlp6xyx24ai3r7xaavx2bsj/app.bsky.feed.post/3mfgb7vegzc2l" data-bluesky-cid="bafyreie6q26cb6zodmhphwtklh25yfm5ioc5uysy747kzvfvnfoqxjcyhe" data-bluesky-embed-color-mode="system"><p lang="ja">私は植物好きだが、そうなった時のことはよく覚えている
札幌に越した時、家族が庭にチューリップの球根を植えたのだ
そして次第に雪また雪
庭はすっかり厚い雪に覆われてしまった
やがて時は春、辺りの雪も少しずつ溶け始めるが、駐車場の雪が落ちるそこはまだ厚く積もったままだった
気温が上がり、やがて庭の一角の雪をシャベルで動かすと、何とあの雪の重さの下にしっかりとチューリップが並んで芽を出しているではないか…
これには本当に驚いた
小さくても何て力強いのだろう
雪を払って陽を浴びると、チューリップ達はすくすく伸びて庭を明るくした
あれから、である
@botanical.bsky.social<br><br><a href="https://bsky.app/profile/did:plc:ntlp6xyx24ai3r7xaavx2bsj/post/3mfgb7vegzc2l?ref_src=embed">[image or embed]</a></p>&mdash; biba (<a href="https://bsky.app/profile/did:plc:ntlp6xyx24ai3r7xaavx2bsj?ref_src=embed">@biba02.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:ntlp6xyx24ai3r7xaavx2bsj/post/3mfgb7vegzc2l?ref_src=embed">22 February 2026 at 13:07</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

[^1]: これに関してはSEも重要で、時のオカリナについては音同士の対比や、それが鳴るタイミングが心地よく、例えばポーズ画面を呼び出して、アイテムを選び、閉じる。これだけの動作の間に聞こえてくる音が不思議なリズムをうみ、今でも記憶に残っている。

[^2]: できる方ができない方に合わせざるを得ない。他の分野では助けられているのだから、お互い様とは思うが。

[^3]: 作業自体はとても単純なもので、とある資料の封入チェックである。印刷したとある資料、それもユニークにIDが振られた資料があって、それが「漏れなく」「ダブりなく」入っており、かつ封筒宛名と「一致しているか」というのが確認したい情報なわけだが、上司の提案は予め送付対象のリストを印刷しておき、１人が封筒を覗いて宛名との一致と資料の枚数をチェックした上で宛名を読み上げ、もう１人がリストを消し込みする、というもので、私に言わせればこれは極めて効率が悪い。印刷した資料自体は信頼できるデータベースから専用の機能で印刷したものであり、それらが余りなく封入されていることは明確である。問題となるのは「ダブり（漏れ）」と「宛名との一致」だけなので、馬鹿正直に分業するよりも、まずはリストなんかほっぽりだして、２人が同時並行で封筒の中身と宛名を確認すればいいのだ。リストと見比べることで宛名の重複や漏れのチェックを同時にしようという考えらしいが、それをやるなら中身チェックを終えた後に封筒の宛名だけを確認すればいい（宛名の作成も含めて、同一のシステムから行なっているため、そこを疑うこと自体が馬鹿馬鹿しいと思うが）。分業は待ちの時間が多いので効率が悪く、その為に三十分以内で終わる作業を１時間半かけて終えたと思う。
