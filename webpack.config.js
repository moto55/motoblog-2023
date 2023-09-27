const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
// const ProvidePlugin = require("provide");

module.exports = {
  mode: "development",
  context: __dirname + "/src",
  entry: "./index.js",
  devtool: "inline-source-map",
  resolve: {
    extensions: ["", ".js", ".jsx"],

    fallback: {
      path: false,

      crypto: false,
      url: false,
      querystring: false,
      util: false,
      http: false,
      https: false,
      os: false,
      fs: false,
      zlib: false,
      // stream: false,
      // buffer: false,
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
    },
  },

  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    //  出力ファイルのディレクト名
    path: `${__dirname}/dist`, // 出力ディレクト内のこの設定場所に書き出される。
    // 出力ファイル名
    filename: "./main.js",
    publicPath: "/",
    // clean: {
    //   keep: /index.html/, // index.html をキープ（削除しない）
    // },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        //拡張子がpng,jpg,gif,svgを検知したら
        test: /\.(png|jpg|gif|svg)/,
        use: [
          {
            loader: "file-loader",
            options: {
              //[name]は画像名、[ext]は拡張子
              name: "images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: `${__dirname}/public/index.html`, //静的ファイルの場所
    open: true,
    historyApiFallback: {
      rewrites: [{ from: /^\/*/, to: "/index.html" }],
    },
  },
  //webpack-dev-server の設定
  // devServer: {
  //   contentBase: path.join(__dirname, "public"),
  //   static: "public/index.html", //静的ファイルの場所
  // },
  plugins: [
    new HtmlWebpackPlugin({
      // 対象のテンプレートを設定
      template: `${__dirname}/public/index.html`,
      // 書き出し先
      filename: `index.html`,
      // ビルドしたjsファイルを読み込む場所。デフォルトはhead
      // inject: "body",
      favicon: `${__dirname}/public/favicon.ico`,
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),

    new Dotenv(),
  ],
};

// // Generated using webpack-cli https://github.com/webpack/webpack-cli

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const isProduction = process.env.NODE_ENV == "production";

// const stylesHandler = isProduction
//   ? MiniCssExtractPlugin.loader
//   : "style-loader";

// const config = {
//   mode: "development",
//   context: __dirname + "/src",
//   entry: "./index.js",
//   // entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//   },

//   devServer: {
//     static: {
//       directory: path.join(__dirname, "public"),
//     },
//     open: true,
//     host: "localhost",
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "index.html",
//     }),

//     // Add your plugins here
//     // Learn more about plugins from https://webpack.js.org/configuration/plugins/
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/i,
//         loader: "babel-loader",
//       },
//       {
//         test: /\.css$/i,
//         use: [stylesHandler, "css-loader"],
//       },
//       {
//         test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
//         type: "asset",
//       },
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },

//       // Add your rules for custom modules here
//       // Learn more about loaders from https://webpack.js.org/loaders/
//     ],
//   },
//   resolve: {
//     modules: ["node_modules"], // モジュールの検索パスを設定
//     extensions: [".js", ".jsx"], // ファイルの拡張子を指定

//     fallback: {
//       stream: require.resolve("stream-browserify"),

//       crypto: require.resolve("crypto-browserify"),
//     },
//   },
// };
// module.exports = () => {
//   if (isProduction) {
//     config.mode = "production";

//     config.plugins.push(new MiniCssExtractPlugin());
//   } else {
//     config.mode = "development";
//   }
//   return config;
// };
