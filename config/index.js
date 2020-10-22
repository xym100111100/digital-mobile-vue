/*
 * @Author: your name
 * @Date: 2020-04-02 15:21:46
 * @LastEditTime: 2020-07-06 18:19:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tengzhou-cloud-app\config\index.js
 */
// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

module.exports = {
    'build': {
        'env': require('./prod.env'),
        'index': path.resolve(__dirname, '../dist/index.html'),
        'assetsRoot': path.resolve(__dirname, '../dist'),
        'assetsSubDirectory': 'static',
        'assetsPublicPath': '/tengzhou_app/',
        // 'assetsPublicPath': '',
        'productionSourceMap': false,// 打包之后是否能查看源码
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        'productionGzip': true,
        'productionGzipExtensions': ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        'bundleAnalyzerReport': process.env.npm_config_report
    },
    'dev': {
        'env': require('./dev.env'),
        'port':9009,
        'autoOpenBrowser': true,
        'assetsSubDirectory': 'static',
        'assetsPublicPath': '/',
        'proxyTable': { // 解决跨域
            '/list': { // 使用"/api"来代替"http://127.0.0.1:8080"
                // 'target': 'http://222.84.255.108:6082',// 源地址 222.84.255.108:6082 ------ 172.20.11.55:6082  ---172.20.11.81
                'target': 'http://172.20.11.55:6066',// 源地址 222.84.255.108:6082 ------ 172.20.11.55:6082  ---172.20.11.81
                'changeOrigin': true, // 改变源
                'pathRewrite': {
                    // '^/list': 'http://222.84.255.108:6082' // 路径重写
                    '^/list': 'http://172.20.11.55:6066' // 路径重写
                }
            },
            '/file': { // 使用"/api"来代替"http://127.0.0.1:8080"
                // 'target': 'http://172.20.11.81:6083',// 源地址   172.20.11.31:6081  -------- 222.84.255.108:6083
                'target': 'http://172.20.11.55:6066',// 源地址   172.20.11.31:6081  -------- 222.84.255.108:6083
                'changeOrigin': true, // 改变源
                'pathRewrite': {
                    // '^/file': 'http://172.20.11.81:6083' // 路径重写
                    '^/file': 'http://172.20.11.55:6066' // 路径重写
                }
            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        'cssSourceMap': false
    }
};
