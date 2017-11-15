const webpack = require('webpack');

// defnir varival de ambiente DESENVOLVIMENTO ou PRODUÇÃO
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './app.js'
  },
  output: {
    filename: './build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015',{modules: false}]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false},
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify(nodeENV)}
    })
  ]
}


/*
Adicionado para minificar o arquivo de saida (build.js) eliminando
metodos não utilizados da biblioteca ramda, eliminando conmentários, etc...
 plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false}
    })
  ]
  
  // Adioonando para disponibilizar a variavel de ambiente DESENVOLVIMENTO/PRODUÇÃO
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify(nodeENV)}
    })
    
  // Adicionado para mapear linha do erro
  devtool: 'source-map',
  sourceMap: true
    
*/
