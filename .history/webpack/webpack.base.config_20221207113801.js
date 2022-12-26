import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { loader as _loader } from 'mini-css-extract-plugin';
import path from 'path';
import { ModulesOption } from '@babel/preset-env/lib/options';
export const entry = "./src/index.js";
export const output = {
  filename: "main.js",
  path: path.resolve(__dirname, "build"),
};
module.exports = () => {
  return merge([
    {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
              process.env.NODE_ENV === 'production'
                ? _loader
                : 'style-loader',
              'css-loader'
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html',
        }),
      ],
    },
  ]);
};