export function buildBabelLoader() {
  return {
    test: /\.(?:js|mjs|cjs)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        targets: 'defaults',
        presets: [
          ['@babel/preset-env']
        ]
      }
    }
  }
}