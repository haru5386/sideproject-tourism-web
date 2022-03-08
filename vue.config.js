module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sideproject-tourism-web/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
           @import "@/assets/scss/main.scss";
        `
      }
    }
  }
};