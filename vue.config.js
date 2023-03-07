const registerRouter = require('./backend/router')
module.exports = {
  // transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `,
      },
    },
  },
  // 利用express启动后端服务，搭建后端路由
  devServer: {
    before(app) {
      registerRouter(app)
    },
  },
}
