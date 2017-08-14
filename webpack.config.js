var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    main:'./src/main.ts',
    devtool:'./src/devtool/devtool.ts',
    devtoolInit:'./src/devtool/devtoolInit.ts',
    embed:"./src/embed/index.ts",
    contentScript:'./src/contentScript/index.ts',
    background:'./src/background/index.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js:"babel-loader?sourceMaps=true!vue-ts-loader"
          },
          esModule: true
          // other vue-loader options go here
        }
      },
      {
        test: /\.ts$/,
        loader: 'babel-loader?sourceMaps=true!ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'gls': path.resolve(__dirname, 'src/UI/global-style'),
      'res': path.resolve(__dirname,"src/resources")
    },
    extensions: ['.js','.ts']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: 'source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  // module.exports.plugins = (module.exports.plugins || []).concat([
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: '"production"'
  //     }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin({
  //     sourceMap: true,
  //     compress: {
  //       warnings: false
  //     }
  //   }),
  //   new webpack.LoaderOptionsPlugin({
  //     minimize: true
  //   })
  // ])
}
