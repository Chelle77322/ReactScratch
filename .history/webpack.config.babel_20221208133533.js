
import developmentConfig from "./webpack/webpack.dev.config.js"
export default
  process.env.NODE_ENV === 'development'
  developmentConfig
   