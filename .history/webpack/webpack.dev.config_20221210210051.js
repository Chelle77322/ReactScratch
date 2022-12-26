import DefinePlugin  from 'webpack';
import {merge}  from 'webpack-merge';
import  webpackBaseConfig  from './webpack.base.config.js';
import path from 'path';
import { fileURLToPath } from 'url';
 const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name', __dirname);

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