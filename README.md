# GAME TYPE LAB — モバイル対応版

APEX Legends、Fortnite、ブロスタ、Overwatch 2のオリジナル診断サイトです。

## まず試す
`index.html` をPCブラウザで開くと診断できます。スマホでホーム画面に追加する機能やオフラインキャッシュは、HTTPSで公開したときに利用できます。

## 無料公開（GitHub Pages）
1. GitHubで新しいリポジトリを作成します。
2. このフォルダ内の全ファイルをアップロードします（`index.html`、`style.css`、`script.js`、`manifest.webmanifest`、`icon.svg`、`sw.js`）。
3. Settings → Pages → Deploy from a branch を選び、`main` と `/(root)` を指定して保存します。
4. 公開されたHTTPSのURLをスマホで開きます。
5. iPhoneは共有メニューから「ホーム画面に追加」、Android/Chromeはメニューから「ホーム画面に追加」または「アプリをインストール」を選びます（表示は端末によって異なります）。

## 診断
- APEX：10問、4タイプ
- Fortnite：10問、4タイプ
- ブロスタ：10問、4タイプ
- Overwatch 2：10問、4タイプ
- スコア集計、前の質問、再診断、結果コピー、結果共有リンク
- レスポンシブ表示、PWA manifest、簡易オフラインキャッシュ

## 注意
公式ゲームとは無関係のファン制作エンタメ診断です。公式ロゴ・画像は使っていません。診断ロジックは外部API不要です。Google Fontsはオンライン時に読み込まれます。
