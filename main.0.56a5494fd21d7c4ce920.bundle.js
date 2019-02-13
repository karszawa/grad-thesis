(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(n,t,i){n.exports=i.p+"add6a5fc4c714da70eb8eada5b9d2522.png"},150:function(n,t,i){i(151),i(408),i(404),n.exports=i(405)},367:function(n,t,i){var r={"./0-title.md":368,"./1-background.md":369,"./2-purpose.md":372,"./3-related-works.md":373,"./4-proposed-method.md":384,"./5-experiment.md":398,"./6-feature-works.md":401,"./7-conclusion.md":403};function e(n){var t=s(n);return i(t)}function s(n){var t=r[n];if(!(t+1)){var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}return t}e.keys=function(){return Object.keys(r)},e.resolve=s,n.exports=e,e.id=367},368:function(n,t){n.exports='\x3c!-- background: food-image --\x3e\n<h1 id="-">アスリートの食事管理システムの構築と検証</h1>\n<p class="place">\n東京大学 工学部 電子情報工学科 平成30年度 卒業研究審査会\n</p>\n\n<p class="aboutme">\n相澤山崎研究室 唐澤弘明\n</p>\n\n<p class="date">\n  2019年2月15日\n</p>\n\n<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">\n'},369:function(n,t,i){n.exports='\x3c!--\n- アスリートの食事\n- 管理栄養士の業務フロー\n- 食事記録の課題\n- インタビュー\n--\x3e\n<h2 id="-">概要</h2>\n<p>FoodLog [1,2] は深層学習による食事画像認識技術を応用した食事記録サービス</p>\n<p><strong class="abstract-theme">\n「FoodLogをアスリートの食生活の改善に使えないか?」\n</strong></p>\n<p class="note">\n  [1] S.Horiguchi, S.Amano, M.Ogawa, K.Aizawa, Personalized Classifier for Food Image Recognition, IEEE Trans. Multimedia Vol 20, No.10, pp.2836-2848, 2018. <br>\n  [2] foo.log 株式会社, <a href="https://foo-log.co.jp/business-foodlog.html">https://foo-log.co.jp/business-foodlog.html</a>, 2019.\n</p>\n\n<hr>\n<h1 id="-">背景</h1>\n<hr>\n<h2 id="-">アスリートの食事は「特殊」で「自己管理が難しい」</h2>\n<p class="table-title">\n一般人の1日のエネルギー必要量とアスリートの1日のエネルギー必要量\n</p>\n\n<table>\n<thead>\n<tr>\n<th style="text-align:left">競技</th>\n<th style="text-align:right">必要エネルギー（男性）</th>\n<th style="text-align:right">必要エネルギー（女性）</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left">（18歳から29歳の平均）</td>\n<td style="text-align:right">2650 kcal</td>\n<td style="text-align:right">1950 kcal</td>\n</tr>\n<tr>\n<td style="text-align:left">陸上短距離</td>\n<td style="text-align:right">2600 - 3300 kcal</td>\n<td style="text-align:right">2300 - 2800 kcal</td>\n</tr>\n<tr>\n<td style="text-align:left">水泳</td>\n<td style="text-align:right">3600 - 4600 kcal</td>\n<td style="text-align:right">2400 - 3600 kcal</td>\n</tr>\n<tr>\n<td style="text-align:left">野球・ソフトボール</td>\n<td style="text-align:right">3400 - 4600 kcal</td>\n<td style="text-align:right">2200 - 3400 kcal</td>\n</tr>\n<tr>\n<td style="text-align:left">ラグビー・アメフト</td>\n<td style="text-align:right"><strong>4000 - 5000 kcal</strong></td>\n<td style="text-align:right">-</td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2 id="-">「管理栄養士」がアスリートの食事指導を行う</h2>\n<section class="dietitian-and-athlete-img-container">\n  <img src="'+i(136)+'" />\n  <img src="'+i(370)+'" />\n</section>\n\n<hr>\n<h2 id="-">管理栄養士の業務フロー</h2>\n<p><img src="'+i(371)+'" /></p>\n<hr>\n<h2 id="-">食事記録の課題</h2>\n<p>\nアスリートの<em>入力すべき情報が多い</em>\n</p>\n\n<p>\n↓\n</p>\n\n<p>\nアスリートが<em>入力をしない、入力を誤る</em>\n</p>\n\n<p>\n↓\n</p>\n\n<p>\n管理栄養士が<strong>適切なアドバイスを生成できない</strong>\n</p>\n'},370:function(n,t,i){n.exports=i.p+"38d0f642fb7c8331c449dddc668e9879.png"},371:function(n,t,i){n.exports=i.p+"5e3970022eb6370f3428dae8d7837d84.png"},372:function(n,t){n.exports='\x3c!--\n- アスリートの食事記録の手間と管理栄養士の栄養指導の手間を軽減する\n- 栄養指導の自動化に向けたデータセット作り\n--\x3e\n\x3c!-- transition: flip --\x3e\n<h1 id="-">目的</h1>\n<hr>\n<h2 id="-1">目的 1</h2>\n<p>アスリートと管理栄養士のコミュニケーションを支援するシステムを開発し</p>\n<p class="emphasis">\n「アスリートの <strong>食事記録</strong> の手間と管理栄養士の <strong>栄養指導</strong> の手間を軽減する」\n</p>\n\n<hr>\n<h2 id="-2">目的 2</h2>\n<p>アスリートと管理栄養士のコミュニケーションを支援するシステムを開発し</p>\n<p class="emphasis">\n「栄養指導の <strong>自動化</strong> に向けた <strong>データセット</strong>を作る」\n</p>\n'},373:function(n,t,i){n.exports='\x3c!--\n- FoodLog\n- Atleta\n- MyFitnessPal\n- Slack / LINE\n- まとめ\n--\x3e\n\x3c!-- transition: flip --\x3e\n<h1 id="-">関連研究</h1>\n<hr>\n<h2 id="foodlog">FoodLog</h2>\n<p>毎日の食事を簡単に記録するためのモバイルアプリケーション\n<br>\n本システムでは食事認識の仕組みをAPIとして用いる</p>\n<section class="images">\n  <figure>\n    <img src="'+i(374)+'" class="raw border">\n    <figcaption>(a) 食事記録の認識結果</figcaption>\n  </figure>\n  <figure>\n    <img src="'+i(375)+'" class="raw border">\n    <figcaption>(b) 食事記録に一覧画面</figcaption>\n  </figure>\n  <figure>\n    <img src="'+i(376)+'" class="raw border">\n    <figcaption>(c) 食事記録の訂正画面</figcaption>\n  </figure>\n</section>\n\n<hr>\n<h2 id="atleta">Atleta</h2>\n<p>アスリートのコンディション管理、食事管理、\n<br>\n指導者・選手間のコミュニケーション管理ができる</p>\n<section class="images">\n  <figure>\n    <img src="'+i(377)+'" class="raw border">\n    <figcaption>(a) 食事記録の一覧画面</figcaption>\n  </figure>\n  <figure>\n    <img src="'+i(378)+'" class="raw border">\n    <figcaption>(b) 練習スケジュールの<br>カレンダー画面</figcaption>\n  </figure>\n  <figure>\n    <img src="'+i(379)+'" class="raw border">\n    <figcaption style="white-space:nowrap;">(c) 指導者とのメッセージ画面</figcaption>\n  </figure>\n</section>\n\n\x3c!--\n---\n\n## MyFitnessPal\n\nアスリートや一般人が自身で栄養管理を行うためのアプリケーション\n<br>\n食事件数400万件・ユーザー1.5億人と世界で最も使用されている食事記録アプリ\n\n<section class="images">\n  <figure>\n    <img src="'+i(380)+'" class="raw border">\n    <figcaption>(a) テキストによる食事の検索画面</figcaption>\n  </figure>\n  <figure>\n    <img src="'+i(381)+'" class="raw border">\n    <figcaption>(b) 食事の詳細画面</figcaption>\n  </figure>\n  <figure>\n    <img src="'+i(382)+'" class="raw border">\n    <figcaption>(c) 運動の登録画面</figcaption>\n  </figure>\n</section> --\x3e\n<hr>\n<h2 id="slack-line">Slack / LINE</h2>\n<p>現場ではこれが一番使われている\n<br>\nアスリートの手間は最小だが、管理栄養士が負担を強いられている</p>\n\x3c!--\n最後が Slack/LINE です。\nこちらはサービスの紹介は必要ないと思います。\n以外に思われるかも知れませんが、管理栄養士の栄養指導の現場ではこれらのツールがもっとも頻繁に使われています。\n理由はアスリートの入力が簡単だからです。\nしかし、ご存知の通りこれらのアプリケーションは食事指導のためのツールではないので、\n管理栄養士の分析の手間は非常に大きいものとなっています。\n--\x3e\n<hr>\n<figure class="big">\n  <img src="'+i(383)+'" class="raw">\n  <figcaption>種々のサービスの優劣(※ Freiの属性マップ)</figcaption>\n</figure>\n'},374:function(n,t,i){n.exports=i.p+"9f3b514c08e252c10bd2d5a732897d5a.png"},375:function(n,t,i){n.exports=i.p+"26afc1d3928df73f165774734d93be56.png"},376:function(n,t,i){n.exports=i.p+"5c0566ef4cb214bac0739f129b1b230a.png"},377:function(n,t,i){n.exports=i.p+"d8a1b3b59e5e98acb03a0ca23a79b5e8.png"},378:function(n,t,i){n.exports=i.p+"26609569a7d41a2587ace3365b9eeb96.png"},379:function(n,t,i){n.exports=i.p+"4f643c6b9676de7d760c0141065414bd.png"},380:function(n,t,i){n.exports=i.p+"19a9bc70593b7d7493ef801b641136dd.png"},381:function(n,t,i){n.exports=i.p+"99c6be017346b8c0f38f570f91aadb88.png"},382:function(n,t,i){n.exports=i.p+"0fe3a45d46db2ea6e1a0096a50d2b728.png"},383:function(n,t,i){n.exports=i.p+"c564bfa3a7966ff607ab4f86b1aac292.png"},384:function(n,t,i){n.exports='\x3c!--\n- 情報の流れ\n- システムの概要\n- システムの詳細\n- アスリートのアプリケーション\n- 管理栄養士のアプリケーション\n--\x3e\n\x3c!-- transition: flip --\x3e\n<h1 id="-">提案手法</h1>\n\x3c!-- ---\n\n## 提案手法\n\nアスリートと管理栄養士が行うコミュニケーションを\n<br>\n**食事画像の認識技術** を用いて簡易化 --\x3e\n<hr>\n<h2 id="-">システムの情報の流れ</h2>\n<figure>\n  <img src="'+i(385)+'">\n</figure>\n\n\x3c!-- ---\n\n## 実際のシステム構成要素\n\n<figure>\n  <img src="'+i(386)+'">\n</figure>\n\n---\n\n## 実際のシステム構成要素（詳細）\n\n<figure>\n  <img src="'+i(387)+'">\n</figure> --\x3e\n<hr>\n<h2 id="-">アスリートのアプリケーションの機能</h2>\n<ul>\n<li>食事の写真を管理栄養士と共有できる</li>\n<li>その日に摂取したエネルギーを計算・表示できる</li>\n<li>管理栄養士とメッセージのやり取りができる</li>\n</ul>\n<hr>\n<h2 id="-">食事作成の手順</h2>\n<figure>\n  <img src="'+i(388)+'">\n</figure>\n\n<hr>\n<video src="../images/create-record.mp4" controls>\n\n\x3c!-- ---\n\n## 料理選択の3つの方法\n\n* **食事画像** からの料理品目の推定\n* **テキスト** による料理品目の検索\n* **バーコード** による料理品目の検索 --\x3e\n<hr>\n<h2 id="-">食事記録の閲覧</h2>\n<section class="horizontal-box">\n  <figure>\n    <img src="'+i(389)+'" class="raw border">\n    <figcaption>食事記録の一覧</figcaption>\n  </figure>\n\n  <figure>\n    <img src="'+i(390)+'" class="raw border">\n    <figcaption>食事記録の詳細</figcaption>\n  </figure>\n</section>\n\n<hr>\n<h2 id="-">メッセージ</h2>\n<section class="horizontal-box">\n  <figure>\n    <img src="'+i(391)+'" class="raw border">\n    <figcaption>メッセージ ①</figcaption>\n  </figure>\n\n  <figure>\n    <img src="'+i(392)+'" class="raw border">\n    <figcaption>メッセージ ②</figcaption>\n  </figure>\n</section>\n\n<hr>\n<h2 id="-">統計情報</h2>\n\x3c!--\nTODO: MOVIE SCENARIO\n- 体組成値の表示と登録\n- 統計情報を増やしたい\n--\x3e\n<section class="horizontal-box">\n  <figure>\n    <img src="'+i(393)+'" class="raw border">\n  </figure>\n\n  <p>\n    <em>体重の登録</em>と表示ができる<br>\n    表示できる統計情報を増やしたい\n  </p>\n</section>\n\n<hr>\n<h2 id="-">管理栄養士のアプリケーションの機能</h2>\n<ul>\n<li>数人から数十人のアスリートの情報（氏名・年齢・体組成値等）を参照できる</li>\n<li>アスリートの食事画像を見ながら栄養指導を作成できる</li>\n<li>コメントと食事をまとめてレポートを作成できる</li>\n</ul>\n<hr>\n<h2 id="-web-">管理栄養士側のWebアプリケーションの画面</h2>\n<figure class="big">\n  <img src="'+i(394)+'" class="raw">\n</figure>\n\n<hr>\n<figure class="full">\n  <img src="'+i(395)+'" class="raw">\n</figure>\n\n\x3c!-- ---\n\n## 目標値の設定\n\n<figure class="big">\n  <img src="'+i(396)+'" class="raw">\n</figure> --\x3e\n<hr>\n<h2 id="-">アドバイスの作成</h2>\n<figure class="big">\n  <img src="'+i(397)+'" class="raw">\n</figure>\n'},385:function(n,t,i){n.exports=i.p+"c338eb1f6281aab90a6cea642d824105.png"},386:function(n,t,i){n.exports=i.p+"2967043409f9e9c12e472874beeb0f9f.png"},387:function(n,t,i){n.exports=i.p+"8750ee82013c46b0a1039adc73e9c3f0.png"},388:function(n,t,i){n.exports=i.p+"a91cd075d3a1708b9426a434c2568d9c.png"},389:function(n,t,i){n.exports=i.p+"5fcd1fedf06e4aef40ecd05ab0013a2e.png"},390:function(n,t,i){n.exports=i.p+"190b3422730f6a96aa4e877bfdf47934.png"},391:function(n,t,i){n.exports=i.p+"02afab100ed72896c5b5daa47b6975c4.png"},392:function(n,t,i){n.exports=i.p+"be81f8dbd6f5641df529222634703cc7.png"},393:function(n,t,i){n.exports=i.p+"26945a83be3faa77cef8c2c81b7c24ac.png"},394:function(n,t,i){n.exports=i.p+"83c4baf277c48dd54d21974f2573a83a.png"},395:function(n,t,i){n.exports=i.p+"3dc3d91032ed652dfe700d218120ee5a.png"},396:function(n,t,i){n.exports=i.p+"2d1ebcd7524e26418d9a7281b4dfe65a.png"},397:function(n,t,i){n.exports=i.p+"b2cc296eba74a7fb2096a9731fc86db2.png"},398:function(n,t,i){n.exports='\x3c!--\n- ベータテスト\n- 結果\n- 本番利用\n- 結果\n- 実際の食事記録\n- 実際のメッセージ\n- 管理栄養士からの感想\n--\x3e\n\x3c!-- transition: flip --\x3e\n<h1 id="-">実験</h1>\n<hr>\n<h2 id="-">実験の段階</h2>\n<ul>\n<li>試験利用（12月中旬〜12月末）</li>\n<li><strong>本番利用（1月中旬〜3月末）</strong></li>\n</ul>\n<hr>\n<h2 id="-">実験前提</h2>\n<div class="left-box">\n<strong>アスリート</strong> 東京大学アメフト部 選手 10名\n<br><br>\n<strong>管理栄養士</strong> 株式会社ドーム 管理栄養士 1名\n<br><br>\n<strong>時期</strong> オフシーズンなので栄養指導の本番\n</div>\n\n<hr>\n<h2 id="-">食事記録の例</h2>\n<p>実験開始から2週間で約500件の食事記録が作成された</p>\n<figure>\n  <img src="'+i(399)+'" class="raw">\n  <figcaption>実際に作成された食事記録の例</figcaption>\n</figure>\n\n<hr>\n<h2 id="-">メッセージの例</h2>\n<figure class="big">\n  <img src="'+i(400)+'" class="raw">\n</figure>\n\n<hr>\n<h2 id="-">管理栄養士によるシステムの評価</h2>\n<ul>\n<li>「食品ごとに栄養素の計算をする必要がなくなった」</li>\n<li>「選手とのやりとりをレポートとして保存する必要がなくなった」</li>\n<li>「選手との食事記録の振り返りがわかりやすく容易になった」</li>\n</ul>\n<p><img src="'+i(136)+'" style="height: 150px; width: auto; margin-top: 24px" /></p>\n'},399:function(n,t,i){n.exports=i.p+"66facbc26744bfce081cfa2ef4fab7d0.png"},400:function(n,t,i){n.exports=i.p+"0ae6750a95d674b93efc20fde0394b8e.png"},401:function(n,t,i){n.exports='\x3c!--\n- 栄養情報の統計\n- 栄養データの正確性\n- サービスのオープン化\n- 栄養指導データの収集\n--\x3e\n\x3c!-- transition: flip --\x3e\n<h1 id="-">課題と展望</h1>\n<hr>\n<h2 id="1-">1. 栄養情報の統計</h2>\n<dl>\n  <dt><strong>現状</strong></dt>\n  <dd>\n  ・ 日毎のエネルギー・栄養素のまとめ<br>\n  ・ 日毎のPFCバランス <span class="mark">(※ PFC: Protein / Fat / Carbs)</span>\n  </dd>\n  <dt><strong>今後</strong></dt>\n  <dd>\n  ・ 栄養摂取量の変化の表示<br>\n  ・ 体組成値の変化の表示\n  </dd>\n</dl>\n\n\x3c!--\n---\n\n## 2. 栄養データの正確性\n\n<dl>\n  <dt><strong>現状</strong></dt>\n  <dd>\n      2種類の栄養データベース<br>\n    ・FoodLog (1500件) → 正確 👍<br>\n    ・EatSmart (9万件) → 不正確 😔\n  </dd>\n  <dt>\n    <strong>手段</strong>\n  </dt>\n  <dd>\n    管理栄養士が補正できるようにする\n  </dd>\n</dl> --\x3e\n<hr>\n<h2 id="2-">2. サービスのオープン化</h2>\n<dl>\n  <dt><strong>現状</strong></dt>\n  <dd>サービスは関係者のみの数十人</dd>\n  <dt><strong>目的</strong></dt>\n  <dd>\n    栄養指導データをデータセットとして利用するために、<br>\n    サービスのオープン化によって<em>多くの人に使って貰いたい</em>\n  </dd>\n  <dt>\n    <strong>手段</strong>\n  </dt>\n  <dd>\n    組織やサービスを管理するためのコンソールを作成し、<br>\n    <em>選手同士を比較</em>したり<em>組織としての入力率</em>を見せる\n  </dd>\n</dl>\n\n<hr>\n<h2 id="3-">3. 栄養指導データの収集</h2>\n<figure>\n  <img src="'+i(402)+'" class="raw">\n  <figcaption>データを分析するためには分析のためのデータ集積所が必要</figcaption>\n</figure>\n'},402:function(n,t,i){n.exports=i.p+"4b9af86ac47b20dd3c635f6f5038566f.png"},403:function(n,t){n.exports='\x3c!--\n- アスリートと管理栄養士のための食事記録システムを開発した\n- 実験を通してポジティブな感想を得られた\n- さらなるユーザー数の増加と栄養指導の自動化に向けたデータの集積を行う\n--\x3e\n\x3c!-- transition: flip --\x3e\n<h1 id="-">結論</h1>\n<hr>\n<h2 id="-">結論</h2>\n<dl>\n  <dt><strong>手法</strong></dt>\n  <dd>食事画像の認識技術をアスリートの食事記録システムに活用</dd>\n  <dt><strong>結果</strong></dt>\n  <dd>管理栄養士<strong>「記録が楽になった」</strong></dd>\n  <dt><strong>課題</strong></dt>\n  <dd>\n    ・ユーザーの増加<br>\n    ・栄養指導の自動化に向けたデータ集積\n  </dd>\n</dl>\n\n<hr>\n<h2 id="-">発表文献</h2>\n'},404:function(n,t){},406:function(n,t,i){var r=i(407);"string"==typeof r&&(r=[[n.i,r,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};i(52)(r,e);r.locals&&(n.exports=r.locals)},407:function(n,t,i){}},[[150,3,4]],[5]]);