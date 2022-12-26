import { merge } from 'webpack-merge';
import productionConfig from "./webpack/webpack.prod.config";
import developmentConfig from "./webpack/webpack.dev.config";

export default Base = () =>
merge(productionConfig(), developmentConfig())



