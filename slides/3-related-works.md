<!--
- FoodLog
- Atleta
- MyFitnessPal
- Slack / LINE
- まとめ
-->

<!-- transition: flip -->

# 関連研究

---

## FoodLog

毎日の食事を簡単に記録するためのモバイルアプリケーション
<br>
本システムでは食事認識の仕組みをAPIとして用いる

<section class="images">
  <figure>
    <img src="../images/foodlog/1.png" class="raw border">
    <figcaption>(a) 食事記録の認識結果</figcaption>
  </figure>
  <figure>
    <img src="../images/foodlog/2.png" class="raw border">
    <figcaption>(b) 食事記録に一覧画面</figcaption>
  </figure>
  <figure>
    <img src="../images/foodlog/3.png" class="raw border">
    <figcaption>(c) 食事記録の訂正画面</figcaption>
  </figure>
</section>

---

## Atleta

アスリートのコンディション管理、食事管理、
<br>
指導者・選手間のコミュニケーション管理ができる

<section class="images">
  <figure>
    <img src="../images/atleta/1.png" class="raw border">
    <figcaption>(a) 食事記録の一覧画面</figcaption>
  </figure>
  <figure>
    <img src="../images/atleta/2.png" class="raw border">
    <figcaption>(b) 練習スケジュールの<br>カレンダー画面</figcaption>
  </figure>
  <figure>
    <img src="../images/atleta/3.png" class="raw border">
    <figcaption style="white-space:nowrap;">(c) 指導者とのメッセージ画面</figcaption>
  </figure>
</section>

<!--
---

## MyFitnessPal

アスリートや一般人が自身で栄養管理を行うためのアプリケーション
<br>
食事件数400万件・ユーザー1.5億人と世界で最も使用されている食事記録アプリ

<section class="images">
  <figure>
    <img src="../images/myfitnesspal/1.png" class="raw border">
    <figcaption>(a) テキストによる食事の検索画面</figcaption>
  </figure>
  <figure>
    <img src="../images/myfitnesspal/2.png" class="raw border">
    <figcaption>(b) 食事の詳細画面</figcaption>
  </figure>
  <figure>
    <img src="../images/myfitnesspal/3.png" class="raw border">
    <figcaption>(c) 運動の登録画面</figcaption>
  </figure>
</section> -->

---

## Slack / LINE

現場ではこれが一番使われている
<br>
アスリートの手間は最小だが、管理栄養士が負担を強いられている

---

## 提案手法と既存手法の比較

||<span class="table-header">入力の用意さ</span>|<span class="table-header">栄養評価の容易さ</span>|<span class="table-header">フィードバック</span>|<span class="table-header">コミュニケーション</span>|<span class="table-header">機能の豊富さ</span>|
|:--|:--|:--|:--|:--|:--|
|FoodLog|○|✕|✕|✕|○|
|Atleta|✕|△|○|○|<span class="double-circle">◎</span>|
|Slack/LINE|○|✕|○|<span class="double-circle">◎</span>|✕|
|Ours|<span class="double-circle">◎</span>|○|○|△|✕|
