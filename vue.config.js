module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        /*
        @在CLI3中已经定义过了 '@': 'srx'
        extensions 也自动配置过了，如果需要有其他的后缀名需要省略，可以写出来继续添加
        */
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network'
      }
      //extensions: []
    }
  }
}