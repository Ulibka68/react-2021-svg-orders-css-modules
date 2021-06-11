const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      types: path.resolve(__dirname, "src/types"),
      components: path.resolve(__dirname, "src/components"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    // filename: "./index.js",
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      // CSS, PostCSS, Sass

      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: devMode ? 1 : 2,
              modules: {
                auto: true,
                mode: "local",
                exportLocalsConvention: "camelCaseOnly",
                exportGlobals: true,
                localIdentName: devMode
                  ? "[local]__[path]_[name]"
                  : "[hash:base64]",
                localIdentName: "[local]_[hash:base64:4]",
                // namedExport: true, - убивает modules
              },
            },
          },
          //    postcss надо запустить только на prod
        ].concat(devMode ? [] : ["postcss-loader"], ["sass-loader"]),
      },
      {
        test: /\.(js|ts)x?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      // шрифты
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext][hash][query]",
        },
      },
      // SVG
      {
        test: /\.svg$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
        generator: {
          filename: "svg/[name][hash][query][ext]",
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8084,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"), // шаблон
      filename: "index.html", // название выходного файла
    }),
    new webpack.HotModuleReplacementPlugin(),
  ].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
  experiments: {
    asset: true,
  },
};
