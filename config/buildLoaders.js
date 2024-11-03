import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildLoaders(options) {
  const isDev = options.mode === 'development';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
      }
    }
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

  return [assetLoader, scssLoader];
}