import  HtmlWebpackPlugin from 'html-webpack-plugin' //installed via npm
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode:"development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'components.js',
    library: {
      type:'module'
    }
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
        { test: /\.txt$/, use: 'raw-loader' },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};