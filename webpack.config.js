const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
    assetModuleFilename: "images/[hash][ext][querry]"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: "" } },
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|mp4|woff|woff2|eot|ttf|svg)$/i,
        type: "asset",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/resources/images/logo.ico",
    }),
    new MiniCssExtractPlugin(),
  ],
};
