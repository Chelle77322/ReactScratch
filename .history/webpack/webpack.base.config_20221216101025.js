import {merge}  from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
 const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name', __dirname);


export default webpackBaseConfig = () => {
  return merge([
    {
      entry : "./src/index.js",
 output : {
  path: path.resolve(__dirname, "./build"),
  filename: {
    javascript:'index.js',
    html: 'index.html',
    inject: 'body'
  }
},
devServer: {
  static: path.resolve(__dirname, './build'),
},
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader?limit=40000',
            },
            resolve: {
              extensions: ["*", ".js"],
            }
          },
          {
            test: /\.css|.scss?$/,
            exclude: /node_modules/,
           use: [
            {loader: "style-loader"},
            {loader: "css-loader"},
            {loader: "sass-loader"},
            
           ]
        
        },
          {
            test: /\.(gif|jpe?g|png|ico)$/,
            exclude: /node_modules/,
            use: {loader: 'url-loader?limit=700000'}
          },
            
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
    
  