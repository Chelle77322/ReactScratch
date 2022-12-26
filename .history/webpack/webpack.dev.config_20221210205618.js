import DefinePlugin  from 'webpack';
import {merge}  from 'webpack-merge';
import  webpackBaseConfig  from './webpack.base.config.js';

let developmentConfig = () => {
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
export default developmentConfig = () => merge(webpackBaseConfig(), developmentConfig());