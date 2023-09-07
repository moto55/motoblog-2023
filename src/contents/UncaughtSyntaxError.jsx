import React from "react";

function UncaughtSyntaxError() {
  return (
    <div>
      <h1>Uncaught SyntaxError: Unexpected token &apos;&lt;&apos;</h1>
      <div className="dateOfEntry">2023/7/16</div>
      <p>はじめまして</p>
      <p>
        サーバーへのアップロード時にこのエラーではまった
        <br />
        これをみんなに早く伝えたい
      </p>
      <p>
        このブログを作り始めてすぐのこと。
        <br />
        React&JavaScriptで作るのが初めての試みだったのもあって
        <br />
        buildフォルダをそのままエックスサーバーへアップロードしたとき
        <br />
        上記エラーに苦しめられました。
        <br />
        ファイルだけだったりフォルダの中がファイルのみだったら
        <br />
        そのままアップロードできます。
        <br />
        ただ、
        <strong>エラーの原因はフォルダの中にフォルダがある場合。</strong>
        <br />
        なぜだか中のフォルダだけが無くなってしまいパスが通らなくなってしまいます。
        <br />
        さらに謎なのが返ってきたファイルの中身がindex.htmlに書き換えられて、
        <br />
        最初のこいつ⇒ &lt;!DOCTYPEhtml&gt;がエラーになってるみたいです。
        <br />
        解決策は一つ一つ手作業でサーバーの中へフォルダを作って
        <br />
        その中へファイルをアップロードしました。正しいのか不安＆結構手間。
        <br />
        いまのところ正しく動いてはいる。
        <br />
        FTPクライアントを使えば上手くいくのかな？教えて欲しいです。
      </p>
      <p>
        このブログを作り始めて試しにアップロードしてみたらいきなりこのハマりよう
        <br />
        このブログはまだ全然出来てないけど一人でもこの罠から早く抜け出せるようにと記事にしました
      </p>
      <p>今後ともよろしくお願いします</p>
    </div>
  );
}

export default UncaughtSyntaxError;
