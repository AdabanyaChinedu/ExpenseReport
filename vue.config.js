const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "@/assets/scss/app.scss")]
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ExpenseReport/'
    : '/',
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       includePaths: ["./node_modules"]
  //     }
  //   }
  // },
  configureWebpack: {
  
  }
};