import React from "react";
import axios from "axios";
// const mysql = require("mysql");

function SqlTest() {
  // // データベース接続情報
  // const dbConnection = mysql.createConnection({
  //   host: "データベースホスト名",
  //   user: "ユーザー名",
  //   password: "パスワード",
  //   database: "データベース名",
  // });

  // // データベースに接続
  // dbConnection.connect((err) => {
  //   if (err) {
  //     console.error("データベースへの接続に失敗しました:", err);
  //   } else {
  //     console.log("データベースに接続しました");
  //   }
  // });

  // axios
  //   .get("https://jsonplaceholder.typicode.com/users")
  //   .then(function (response) {
  //     // handle success(axiosの処理が成功した場合に処理させたいことを記述)
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
  //   });

  return <div>SqlTest</div>;
}

export default SqlTest;
