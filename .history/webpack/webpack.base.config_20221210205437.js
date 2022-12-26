import {merge}  from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
module.exports = () => {
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
    
    export default webpackBaseConfig;