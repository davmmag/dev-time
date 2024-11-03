import webpack from "webpack";
import { buildLoaders } from "./buildLoaders.js";
import { buildDevServer } from "./buildDevServer.js";

export function buildWebpack(options) {
  const { mode, paths } = options;
  const isDev = mode === 'development';

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: isDev ? buildDevServer(options): undefined,
  }
};