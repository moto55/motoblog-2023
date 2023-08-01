import React from "react";
import suspension from "./images/suspensionimg.png";
import jiroimg from "./images/jiroimg.png";
import motoblog from "./images/motoblogimg.png";
import guminkaigiimg from "./images/guminkaigiimg.png";
import referencebook2 from "./images/referencebook2.jpg";
import referencebook1 from "./images/referencebook1.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Portfolio() {
  Zoom();
  return (
    <div className="port-container">
      <h2>portfolio</h2>
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
      <div className="others">
        <div className="category-box">
          <h3>講習・コミュニティー</h3>
          <h4>Java認定資格問題集（通称 黒本）著者のオンライン講習を受講</h4>
          <p>
            志賀澄人 主催&nbsp;
            <a href="https://www.jpin.info/" target="_blank" rel="noopener">
              JPIN
            </a>
            / JAVA PROGRAMMER INTERN AT NIGHT
            <br />
            グループディスカッションを主体に、年齢や経験も様々な人たちが集まり
            <br />
            お互いを支えあいながら学びあう
            <br />
            Javaの基本文法からオブジェクト指向、デザインパターン、良いコードの書き方とは等
            <br />
            さらに、お客様のIT化、DXへの効率の良いシステムの構築提案。
            <br />
            ヒアリングから要件定義を洗い出し概念モデル、クラス図を作成
            <br />
            上流から下流までの一連の工程
            <br />
            コミュニティでの定期的な読書会
            <br />
            2019-現在
          </p>
        </div>
        <div className="category-box">
          <h3>所持参考書・キンドル・動画教材</h3>
          <div className="referencebook">
            <Zoom>
              <img
                src={referencebook1}
                className="referencebook1"
                alt="referencebook1"
              />
            </Zoom>
            <Zoom>
              <img
                src={referencebook2}
                className="referencebook2"
                alt="referencebook1"
              />
            </Zoom>
          </div>
          <div className="electric">
            <p>
              <h3>キンドル</h3>
              <h4>
                モダンJavaScriptの基本から始める
                React実践の教科書（最新ReactHooks対応）
              </h4>
              じゃけぇ（岡田 拓巳）
              <h3>udemy</h3>
              <h4>
                【Twitterクローン】React×Firebaseでツイッターアプリをハンズオン形式で自作してみよう！
              </h4>
              Shin Code
              <h4>
                【2023年最新】React(v18)完全入門ガイド｜Hooks、Next.js、Redux、TypeScript
              </h4>
              【CodeMafia】 WEBプログラミング学習
              <h4>
                【JS】ガチで学びたい人のためのJavaScriptメカニズム 【CodeMafia】
              </h4>
              【CodeMafia】 WEBプログラミング学習
            </p>
          </div>
        </div>
      </div>
      <div className="category-box">
        <div className="profile">
          <div className="snsacount">
            <h3>twitter/GitHub</h3>
            <a
              href="https://twitter.com/moto_AppCreator"
              target="_blank"
              rel="noopener"
            >
              <h4>twitter</h4>
            </a>
            <a href="https://github.com/moto55" target="_blank" rel="noopener">
              <h4>GitHub</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
