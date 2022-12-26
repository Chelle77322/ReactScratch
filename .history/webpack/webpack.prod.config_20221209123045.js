import DefinePlugin  from 'webpack';
import { merge } from 'webpack-merge';
// plugins
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import webpackBaseConfig from './webpack.base.config.js';
const productionConfig = () => {
  return merge([
    {
      mode: 'production',
      optimization: {
        minimize: true,
        runtimeChunk: 'single',
        minimizer: [new TerserPlugin()],
      },
      plugins: [
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin(),
        new DefinePlugin({
          isDevelopment: false,
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        }),
        new CompressionPlugin(),
      ],
    },
  ]);
};
export default productionConfig = () => merge(webpackBaseConfig(), productionConfig());
