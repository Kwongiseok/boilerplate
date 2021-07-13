const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html 테스트 확인용
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 재 빌드할 때 마다 삭제

module.exports = {
  entry: "./src/index.js", // 기준
  output: { path: path.resolve(__dirname, "dist"), filename: "bundle.js" }, // output 파일
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // babel + webpack을 이용해서 자바스크립트 트랜스파일링
          options: {
            configFile: "./.babelrc",
          },
        },
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"], // 옵션은 있어도 되고, 없어도 됨!
    }),
  ],
  devtool: "source-map",
  mode: "production",
};

// build : webpack 설정

// npm install @babel/core @babel/cli @babel/preset-env --save-dev
// npm i babel-loader css-loader file-loader --save-dev
// npm i html-webpack-plugin clean-webpack-plugin --save-dev
// npm i webpack webpack-cli --save-dev
