import DefinePlugin  from 'webpack';
import { merge } from 'webpack-merge';
import  webpackBaseConfig  from './webpack.base.config.js';

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