// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = {
  // 配合gitopage部署
  outputDir: 'docs',
  // 解决静态文件路径问题
  publicPath: './', 
  // 
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin()
    ]
   }
}