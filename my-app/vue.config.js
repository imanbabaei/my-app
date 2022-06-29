const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/my-app/',
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    webpack: {
      dir: [
        './webpack'
      ]
    }
  }
})
