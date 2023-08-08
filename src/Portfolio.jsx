import React from "react";
import suspension from "./images/suspensionimg.png";
import jiroimg from "./images/jiroimg.png";
import motoblog from "./images/motoblogimg.png";
import guminkaigiimg from "./images/guminkaigiimg.png";

function Portfolio() {
  return (
    <div className="port-container">
      <h2>Portfolio</h2>
      <div className="category-box">
        <div className="contents-Box">
          <div>
            <img src={motoblog} className="motoblogimg" alt="motoblogimg" />
          </div>
          <div>
            <h4>blog</h4>
            <p>
              <a
                href="https://www.motoblog55.org/"
                target="_blank"
                rel="noopener"
              >
                motoblog55
              </a>
              <br />
              HTML/CSS/JavaScript/React
              <br />
              リニューアル中
            </p>
          </div>
        </div>
        <div className="contents-Box">
          <div>
            <img
              src={suspension}
              className="suspensionimg"
              alt="suspensionimg"
            />
          </div>
          <div>
            <a
              href="https://play.google.com/store/apps/developer?id=Book+eternal&hl=ja"
              target="_blank"
              rel="noopener"
            >
              <h4>Androidアプリ</h4>
            </a>
            <p>
              java/Realm
              <br />
              数値を入力し保存する
              <br />
              ノートなど使っていたものをアプリに
              <br />
              イラストはオリジナルで作製
              <br />
              2022
            </p>
          </div>
        </div>
        <div className="contents-Box">
          <img src={jiroimg} className="jiroimg" alt="jiroimg" />
          <p>
            Kotlin/Jetpack Compose/SQLites
            <br />
            日時を記録し見返し反省する
            <br />
            2022
          </p>
        </div>
        <div className="contents-Box">
          <img
            src={guminkaigiimg}
            className="guminkaigiimg"
            alt="guminkaigiimg"
          />
          <p>
            <h4>webサービス</h4>
            <a
              href="https://twitter-clone-test-8c7e2.web.app/"
              target="_blank"
              rel="noopener"
            >
              愚民会議（仮）
            </a>
            <br />
            HTML/CSS/JavaScript/React/Firebase
            <br />
            スレッドの作成、コメント書き込み
            <br />
            アンケート作成&投票、いいね機能、SNS認証
            <br />
            2023 制作途中
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
