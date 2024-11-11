const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {
  const isDev = env.mode === 'development';

  const imageminPlugin = {

  }
  const babelLoader = {
    test: /\.(?:js|mjs|cjs)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        targets: "defaults",
        presets: [
          ['@babel/preset-env']
        ]
      }
    }
  }

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  const cssLoaderWithModules = {
    loader: 'css-loader',
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      {
        loader: 'sass-loader',
        options: {
          implementation: require("sass-embedded")
        }
      },
    ]
  }
  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    module: {
      rules: [
        scssLoader,
        assetLoader,
        babelLoader
      ]
    },
    
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      !isDev ? new MiniCssExtractPlugin({
        filename: 'css/style.css',
      }) : undefined,
      new CopyPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'src', 'assets'), to: path.resolve('build', 'assets') },
        ],
      }),
    ],
    devServer: {
      port:  3000,
      open: true,
      // если раздавать статику через nginx То надо делать проксирование на Index.html
      historyApiFallback: true,
      hot: true
    }
  }
}