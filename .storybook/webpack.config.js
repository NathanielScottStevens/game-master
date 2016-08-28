const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        include: path.resolve(__dirname, '../../')
      }
    ]
  }
}
