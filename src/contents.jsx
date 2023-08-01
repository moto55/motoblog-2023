import React from "react";
import twitterlogo from "./images/twittericon.svg";
import { Link } from "react-router-dom";

function Contents() {
  return (
    <>
      <div className="App-container">
        <h1>motoblog</h1>
        <h2>Uncaught SyntaxError: Unexpected token &apos;&lt;&apos;</h2>
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
        <div>お問い合わせ・アドバイスはこちらまで</div>
        <a
          target="_blank"
          rel="noopener"
          href="https://twitter.com/moto_AppCreator"
        >
          <img className={"twitterlogo"} src={twitterlogo} alt="twittericon" />
        </a>
      </div>
      <Link to={"/portfolio202307"} className="portlink">
        portfolio
      </Link>
    </>
  );
}

export default Contents;
