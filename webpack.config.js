const path = require('path')

const clientConfig = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'build/public/js'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

const serverConfig = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

module.exports = [clientConfig, serverConfig]
