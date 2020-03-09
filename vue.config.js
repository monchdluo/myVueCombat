const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
  // return path.join(__dirname, '..', dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // import Vue from 'vue/dist/vue.esm.js'
        'vue$': 'vue/dist/vue.esm.js',
        // import ff from 'src/components/Header/Header.vue'
        // import ff from 'src/components/Header/Header.vue'
        //  '@123': resolve('src/components')
        //  import ff from '@123/Header/Header.vue'
        '@': resolve('src')
      }
    },
  },
  devServer: {
    // 解决跨域
    proxy: 'http://localhost:4001'
  }
}