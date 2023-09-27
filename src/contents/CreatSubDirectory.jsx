import React from "react";

function CreatSubDirectory() {
  return (
    <div className="content-box">
      <h1>ベーシック認証に必要なサブディレクトリを作る</h1>
      <div className="dateOfEntry">2023/9/7</div>
      <div>
        お問い合わせ有難うございます。
        <p />
        <p>
          こんなことありませんか？ <br />
          制作途中のwebサイトをある人にだけ見せたい。
          <br />
          会員やコミュニティーの人だけ閲覧できるようにしたい。
          <br />
          サイトを全公開せずパスワードを知ってる人のみ入れる。
          <br />
          そこで便利なのがベーシック認証。
        </p>
        <p>環境：xサーバー/React/JavaScript</p>
        <p>
          xサーバーではベーシック認証をするにはディレクトリ（フォルダ）単位での設定みたいです
          <br />
          なので今回はベーシック認証に必要なディレクトリを作成する方法と注意点を紹介します。
          <br />
          ベーシック認証の設定方法はxサーバーのマニュアルに詳しく載っているので割愛します。
        </p>
        まずはxサーバーのファイルマネージャ内の既にあるドメインの public_html
        の中にファイルを作成します。
        <br />
        ファイル名を portfolio としました。
        <br />
        これがurlのサブディレクトリ名になります。お好きな名前をどうぞ。
        <br />
        このようになります⇒　https://www.motoblog55.org/portfolio
        <br />
        あとは既にpublic_htmlにアップロードしたのと同じように新しく作ったportfolioフォルダ内にも必要なフォルダ・ファイルをアップロードします。
      </div>
      <p>
        前後してしまいましたがアップロード前に下記2点の追加が必要です
        <br />
        package.json内に下記を追加します
      </p>

      <div className="codetitle">package.json</div>
      <div className="codedisplay">
        &quot;homepage&quot;: &quot;/portfolio/&quot;,
      </div>

      <p>
        ルーティングにReact
        Routerを使用している場合はBrowserRouterにbasenameを追加してください
      </p>
      <div className="codedisplay">
        &lt;BrowserRouter basename=&quot;/portfolio/&quot;&gt;
      </div>

      <p>これで正しく表示出来てるはずです。</p>
      <p>見てくれてありがとう！</p>
    </div>
  );
}
//  &lt;  !DOCTYPEhtml  &gt;

export default CreatSubDirectory;
