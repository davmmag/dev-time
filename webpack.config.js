import webpack from 'webpack';
import { buildWebpack } from './config/buildWebpack.js';
import path from 'path';

export default (env) => {
  const paths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'main.js'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  };

  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
  });
  config.node = {
    __dirname: true,
  } 

  return config;
};