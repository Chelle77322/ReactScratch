import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { loader as _loader } from 'mini-css-extract-plugin';
module.exports = () => {
  return merge([
    {
      entry : "./src/index.js",
 output : {
  filename: "main.js",
  path: path.resolve(__dirname, "build"),
},
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
            resolve: {
              extensions: ["*", ".js"],
            }
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