// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // 配合gitopage部署
  outputDir: 'docs',
  // 解决静态文件路径问题
  publicPath: './', 
}