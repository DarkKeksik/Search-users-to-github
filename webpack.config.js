const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const faviconName = 'ico.svg'

const babelLoaderConfig = presets => {
  let config = {
    loader: 'babel-loader',
    options: {
      presets: [ '@babel/preset-env' ]
    }
  }

  if ( presets ) {
    config.options.presets = [ ...config.options.presets, ...presets ]
  }

  return config;
}

const getPlugins = isProd => {
  let plugins = [
    new HTMLWebpackPlugin({
      template: './static/index.html',
      templateParameters: {
        title: 'Search on github | main page',
        noscript: 'Please turn on JavaScript in your browser',
        favicon: faviconName
      },
      minify: {
        removeRedundantAttributes: isProd,
        collapseWhitespace: isProd,
        keepClosingSlash: isProd,
        removeComments: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: `./static/${ faviconName }`,
        to: path.resolve(__dirname, './dist')
      }]
    })
  ]

  if (isProd) plugins.push(new BundleAnalyzerPlugin())

  return plugins
}

module.exports = {
  context: path.resolve(__dirname, './app'),
  mode: isDev ? 'development' : 'production',
  entry: {
    main: './index.js'
  },
  output: {
    filename: isDev ? `[name].js` : `[name].[hash].js`,
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    // @TODO Add next time (and tsconfig.json)
    // alias: {
    //   '@Components': '/src/Components',
    //   '@Layouts': '/utils',
    //   '@utils': '/utils'
    // }
  },
  plugins: getPlugins(isProd),
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: babelLoaderConfig(['@babel/preset-react'])
      },
      {
        test: /\.ts$|tsx/,
        exclude: /node_modules/,
        use: babelLoaderConfig(['@babel/preset-react', '@babel/preset-typescript'])
      }
    ]
  },
  devServer: {
    port: 8080,
    hot: isDev
  }
}