/*
 * @Author: your name
 * @Date: 2020-03-20 10:45:57
 * @LastEditTime: 2020-07-06 18:16:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \smart-app\src\utils\env.js
 */
/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 *
 */
import httpserver from './httpPrompt';
let baseUrl = '';
let fileUrl='';
let staticPath ='/static/'; // 静态地址，开发时使用
let resourcePath ='http://172.20.11.31:8686'; // 资源路径
/*let listUrl = '';*/
if (process.env.NODE_ENV == 'development') {

  // 藤州
  baseUrl = `http://172.20.11.81:7512/${httpserver.web_service_name1}`;
  fileUrl = `http://172.20.11.81:7512/${httpserver.web_service_name2}`;

  // baseUrl = `http://172.20.11.55:6066/${httpserver.web_service_name1}`;
  // fileUrl = `http://172.20.11.55:6066/${httpserver.web_service_name2}`;
 

} else if (process.env.NODE_ENV == 'production') {
  /*baseUrl = `${window.location.protocol}//${window.location.host}/${httpserver.web_service_name}`;*/
//baseUrl = `http://222.84.255.108:6082/${httpserver.web_service_name1}`;
//fileUrl = `http://222.84.255.108:6083/${httpserver.web_service_name2}`;

  // baseUrl = `http://172.20.11.81:6082/${httpserver.web_service_name1}`;
  // fileUrl = `http://172.20.11.81:6083/${httpserver.web_service_name2}`;
  staticPath ='/tengzhou_app/static/'; // 静态地址，开发时使用
  baseUrl = `http://121.31.67.21:9329/${httpserver.web_service_name1}`;
  fileUrl = `http://121.31.67.21:9329/${httpserver.web_service_name2}`;
}
export default {
  baseUrl,
  fileUrl,
  staticPath,
  resourcePath
}
