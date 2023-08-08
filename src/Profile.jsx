import React from "react";
import referencebook2 from "./images/referencebook2.jpg";
import referencebook1 from "./images/referencebook1.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import twitterlogo from "./images/twittericon.svg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="prof-container">
      <h2>profile</h2>
      <div className="name-container">
        <div className="namebox">
          <h2>本永寛之</h2>
          <p>Motonaga Hiroyuki</p>
        </div>
        <div className="mailbarthbox">
          <div> 1974年生まれ 49歳 / 東京都八王子市</div>
          <div>moto@motoblog55.org</div>
        </div>
        <div className="proficon-box">
          <div className="iconarea">
            <IconButton className="proficonbtn iconarea">
              <a
                href="https://twitter.com/moto_AppCreator"
                target="_blank"
                rel="noopener"
              >
                <img
                  className="profile-twitterlogo"
                  src={twitterlogo}
                  alt="twittericon"
                />
              </a>
            </IconButton>
          </div>
          <IconButton className="proficonbtn iconarea">
            <a href="https://github.com/moto55" target="_blank" rel="noopener">
              <GitHubIcon
                className="profile-githubicon"
                style={{ fontSize: "35px", color: "black" }}
              />
            </a>
          </IconButton>
          <Link to={"/portfolio202307"} className="porfoliotlink iconarea">
            ポートフォリオ
          </Link>
        </div>
      </div>

      <p className="indent">
        営業やドライバーなどの職を経て2019年アプリやwebサービスのフリーランスとして独立{" "}
        <br />
        現在、知人の仕事（非IT）を手伝いながらオリジナルアプリなどを製作
        <br />
        個人開発のためデザイン・ロゴ・キャッチコピーからコードのフロント・バックまで
        <br />
        何でもやるをモットーに出来ないことも『出来るようになればいい』と心がけています
        <p className="closingsentence">
          もし少しでも接点がありましたらお手伝いできる所もあるかと思います
          <br />
          その時は協力業者の手の一つとして頂けると幸いです
        </p>
      </p>
      <h3>skill</h3>
      <div className="indent skillbox">
        <p>webサービス</p>
        <p className="skillitems">HTML/CSS/JavaScript/React/Firebase</p>
        <p>Androidアプリ</p>
        <p className="skillitems">Java/Kotlin/Jetpack Compose/Realm/SQLites</p>
        <p>その他</p>
        <p className="skillitems">Inkscape</p>
      </div>
      <div className="others">
        <div className="category-box">
          <h3>講習・コミュニティー</h3>
          <div className="indent">
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
        </div>
        <div className="category-box">
          <h3>所持参考書・キンドル・動画教材</h3>
          <div className="categoryitem">参考書</div>

          <div className="referencebook indent">
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
              <div className="categoryitem">キンドル</div>
              <div className="indent">
                <h4>
                  モダンJavaScriptの基本から始める
                  React実践の教科書（最新ReactHooks対応）
                </h4>
                じゃけぇ（岡田 拓巳）
              </div>
              <div className="categoryitem">udemy</div>
              <div className="indent">
                <h4>
                  【Twitterクローン】React×Firebaseでツイッターアプリをハンズオン形式で自作してみよう！
                </h4>
                &emsp;Shin Code
                <h4>
                  【2023年最新】React(v18)完全入門ガイド｜Hooks、Next.js、Redux、TypeScript
                </h4>
                【CodeMafia】 WEBプログラミング学習
                <h4>【JS】ガチで学びたい人のためのJavaScriptメカニズム</h4>
                【CodeMafia】 WEBプログラミング学習
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
