import {merge}  from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
 const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name', __dirname);
let webpackBaseConfig = "";

export default webpackBaseConfig = () => {
  return merge([
    {
      entry : "./src/index.js",
 output : {
  path: path.resolve(__dirname, "./build"),
  filename: "main.js",
},
devServer: {
  static: path.resolve(__dirname, './build'),
},
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
            resolve: {
              extensions: ["/*", ".js"],
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
          {
            test: /\.(gif|jpe?g|png|ico)$/,
            exclude: /node_modules/,
            use: {loader: 'url-loader?limit=1090000'}
          },
            //Loader Rule 5
          {
            test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
            exclude: /node_modules/,
            use: {loader: 'url-loader?limit=100000'}
          },
         
        ],
      
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html',
        }),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
      ],
    }
    ]) 
    }
    
  