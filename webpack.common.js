const
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  path = require('path'),
  glob = require("glob"),
  {CleanWebpackPlugin} = require("clean-webpack-plugin")
;

module.exports = {
  entry: glob.sync('./src/**/*.js').reduce((acc, path) => {
    let entry = path.replace(/src|\.?js/g, '').replace(/\/\//g,'/');
    acc[entry] = path;
    return acc;
  }, {}),
  output: {
    filename: './[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: () => {
        let name = '/[name].css'
        return name.replace('js', '');
      }
    }),
    new CleanWebpackPlugin()
  ]
}