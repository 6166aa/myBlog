const { resolve } = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'));
  },
  css: {
    loaderOptions: {
      stylus: {
        // import: ["~@/assets/variable.styl", "~@/assets/variable2.styl"]
        import: '~@/assets/css/global.styl',
      },
    },
  },
};
