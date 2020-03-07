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
	// devServer: {
	// 	proxy: {
	// 		'/api': {
	// 			target: 'http://localhost:5000',
	// 			changeOrigin: true, // 支持跨域
	// 			pathRewrite: { '^/api': '' }
	// 		}
	// 	}
	// }
}