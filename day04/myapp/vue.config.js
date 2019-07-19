module.exports = {
  publicPath: './',
  devServer: {
    // proxy: 'https://dsapi.beibei.com'
    proxy: {
      '/api': {
        target: 'https://dsapi.beibei.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}