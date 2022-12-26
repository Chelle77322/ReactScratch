import DefinePlugin  from 'webpack';
import { merge } from 'webpack-merge';
//import default as webpackBaseConfig  from './webpack.base.config.js';
import webpack from 'webpack';
const developmentConfig = () => {
  return merge([
    {
      mode: 'development',
      plugins: [
        new DefinePlugin({
          isDevelopment: true,
          'process.env': {
            NODE_ENV: JSON.stringify('development'),
          },
        }),
      ],
    },
  ]);
};
export default () => merge(webpackBaseConfig(), developmentConfig());