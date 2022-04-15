module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "./src/styles/_style";',
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        changeOrigin: true,
      },
    },
  },
};
