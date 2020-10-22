<!--
 * @Author: your name
 * @Date: 2020-04-02 15:18:26
 * @LastEditTime: 2020-07-06 16:31:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tengzhou-cloud-app\README.md
 -->
# 南宁铁路运输检察院

## 开发分支

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

#如果依赖chromedriver模块报错时   由于chromedriver下载地址被墙了，从cdn镜像下载
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver

#如果启动是node-scss报错，到nodemondle中去删除node-scss模块，重新下载
npm install --save node-sass

# run prod build
#
#
#
#如果需要打生产环境，需要修改utils/httpPrompt.js  baseURL的生产地址

```


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
