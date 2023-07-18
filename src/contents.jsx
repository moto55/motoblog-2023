import React from "react";
import twitterlogo from "./images/twittericon.svg";

function Contents() {
  return (
    <>
      <div>
        <h2>Uncaught SyntaxError: Unexpected token &apos;&lt;&apos;</h2>
        <p>エックスサーバーへのアップロードではまった</p>
        <p>
          みんなに早く伝えたい
          <br />
          React&JavaScriptでこのブログを作り始めてすぐのこと。
          <br />
          初めてだったので試しにエックスサーバーへbuildフォルダをそのままアップロードしたとき
          <br />
          上記エラーに苦しめられました。
          <br />
          ファイルやフォルダの中がファイルのみだったらフォルダごとアップロードできます。
          <br />
          ただエラーの原因はどうもフォルダの中にフォルダがある場合。
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
          FTPクライアントを使えば上手くいくのかな？教えて欲しいです。
        </p>
        <p>
          このブログを作り始めて試しにアップロードしてみたらいきなりこのハマりよう
          <br />
          このブログはまだ全然出来てないけど一人でもこの罠から早く抜け出せるようにと記事にしました
        </p>
        2023/7/16
      </div>
      <div>お問い合わせ・アドバイスはこちら</div>
      <a target="_blank" rel="noopener" href="https://twitter.com/home">
        <img className={"twitterlogo"} src={twitterlogo} alt="twittericon" />
      </a>
    </>
  );
}

export default Contents;
