const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");

const isDev = process.env.NODE_ENV === "development";

const defaultPlugins = [
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "template.html"
    // inject: true
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  })
]

let config;

if (isDev) {
  config = merge(baseConfig, {
    devtool: "#cheap-module-eval-source-map",
    devServer: {
      host: "0.0.0.0",
      port: 8000,
      overlay: {
        errors: true //webpack 编译过程中，一出现错误 就会显示到网页上
      },
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.styl(us)?$/,
          use: [
            "vue-style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "px2rem-loader",
              options: {
                remUnit: 75 //设计稿宽度/10
              }
            },
            "stylus-loader"
          ]
        }
      ]
    },
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin()
    ])
  });
} else {
  config = merge(baseConfig, {
    output: {
      filename: "[name].[chunkhash:8].js"
    },
    module: {
      rules: [
        {
          test: /\.styl(us)?/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "px2rem-loader",
              options: {
                remUnit: 75 //设计稿宽度/10
              }
            },
            "stylus-loader"
          ]
        }
      ]
    },
    plugins: defaultPlugins.concat([
      new MiniCssExtractPlugin({
        filename: "styles.[chunkhash:8].css"
        // chunkFilename: "[id].css"
      })
    ]),
    optimization: {
      splitChunks: {
        chunks: "all"
      },
      runtimeChunk: true
    }
  })
}
module.exports = config;
