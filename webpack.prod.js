const
  {merge} = require('webpack-merge'),
  common = require('./webpack.common.js'),
  CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
  {WebpackManifestPlugin} = require('webpack-manifest-plugin')
;

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: {removeAll: true},
            },
          ],
        },
      }),
    ],
  },
  plugins: [
    new WebpackManifestPlugin({})
  ]
});