import React from "react";
import twitterlogo from "./images/twittericon.svg";
import { Link } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";

function Contents() {
  return (
    <>
      <div className="App-container">
        <h3>motoblog</h3>
        <h1>Uncaught SyntaxError: Unexpected token &apos;&lt;&apos;</h1>
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
        2023/7/16
        <div>お問い合わせ・アドバイスはこちらまで</div>
        <a
          target="_blank"
          rel="noopener"
          href="https://twitter.com/moto_AppCreator"
        >
          {/* <img className={"twitterlogo"} src={twitterlogo} alt="twittericon" /> */}
          <svg className="twitterSvg" viewBox="0 0 25 25">
            <path
              d="m6.29 18.12c7.53 0 11.65-6.25 11.65-11.65 0-.18 0-.35 0-.53.8-.58 1.49-1.3 2.04-2.12-.73.33-1.53.54-2.36.65.85-.5 1.49-1.31 1.81-2.27-.79.47-1.67.81-2.6.99-.75-.8-1.81-1.29-2.99-1.29-2.26 0-4.1 1.84-4.1 4.1 0 .32.04.63.1.93-3.4-.17-6.42-1.81-8.44-4.28-.35.61-.55 1.31-.55 2.06 0 1.42.73 2.68 1.82 3.41-.67-.02-1.3-.21-1.85-.51v.06c0 1.98 1.41 3.64 3.28 4.02-.34.1-.7.14-1.08.14-.26 0-.52-.02-.77-.07.52 1.63 2.04 2.81 3.83 2.84-1.41 1.1-3.17 1.76-5.09 1.76-.33 0-.65-.02-.97-.06 1.81 1.15 3.96 1.83 6.27 1.83"
              fill="#1da1f2"
            />
          </svg>
        </a>
        <div className="footer">
          <Link to="/privacypolicy">プライバシーポリシー</Link>
        </div>
      </div>
      {/* <Link to={"/portfolio202307"} className="porfoliotlink">
        portfolio
      </Link>
      <Link to={"/profile202307"} className="profilelink">
        profile
      </Link> */}
    </>
  );
}

export default Contents;
