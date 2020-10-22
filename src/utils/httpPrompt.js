/*
 * @Author: your name
 * @Date: 2020-03-20 10:45:57
 * @LastEditTime: 2020-05-06 15:04:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \smart-app\src\utils\httpPrompt.js
 */
/*
 * date: 2018/07/13 10:10
 * author: guochao
 * content: 处理接口异常及接口地址
 * email: guochao@yinyin360.com
 */
// const baseUrl = 'http://localhost:8080'; //webpack默认启动8080端口

const httpserver = {
	"url" :'http://localhost:9000/' ,
	"baseUrl":'http://127.0.0.1:8080/',
	"imgUrl":"http://mer-img-1253674872.picsh.myqcloud.com",
	"web_service_url" : '',
	"web_service_name" : "base/",
	"web_service_name1" : "",
  "web_service_name2" : "file/",
	"web_service_rebate_name":"wxmall/",

  "0" : "您当前网络状况不好,请稍后再试!",
  "400" : "程序请求出现语法错误。",
  "401" : "程序试图未经授权访问受密码保护的页面。应答中会包含一个WWW-Authenticate头，浏览器据此显示用户名字/密码对话框，然后在填 写合适的Authorization头后再次发出请求。",
  "403" : "资源不可用。服务器理解程序的请求，但拒绝处理它。通常由于服务器上文件或目录的权限设置导致。",
  "404" : "网络开小差了~~~请您稍后刷新~~~",
  "405" : "请求方法（GET、POST、HEAD、DELETE、PUT、TRACE等）对指定的资源不适用。（HTTP 1.1新）",
  "406" : "指定的资源已经找到，但它的MIME类型和程序在Accpet头中所指定的不兼容（HTTP 1.1新）。",
  "407" : "类似于401，表示程序必须先经过代理服务器的授权。（HTTP 1.1新）",
  "408" : "在服务器许可的等待时间内，程序一直没有发出任何请求。程序可以在以后重复同一请求。（HTTP 1.1新）",
  "409" : "请求和资源的当前状态相冲突，请求不能成功。（HTTP 1.1新）",
  "410" : "所请求的文档已经不再可用，而且服务器不知道应该重定向到哪一个地址。它和404的不同在于，返回407表示文档永久地离开了指定的位置，而 404表示由于未知的原因文档不可用。（HTTP 1.1新）",
  "411" : "服务器不能处理请求，除非程序发送一个Content-Length头。（HTTP 1.1新）",
  "412" : "请求头中指定的一些前提条件失败（HTTP 1.1新）。",
  "413" : "目标文档的大小超过服务器当前愿意处理的大小。如果服务器认为自己能够稍后再处理该请求，则应该提供一个Retry-After头（HTTP 1.1新）。",
  "414" : "请求过长（HTTP 1.1新）。",
  "416" : "服务器不能满足程序在请求中指定的Range头。（HTTP 1.1新）",
  "500" : "出错了，请您稍后再试~~~",
  "501" : "出错了，请您稍后再试~~~",
  "502" : "出错了，请您稍后再试~~~",
  "503" : "出错了，请您稍后再试~~~",
  "504" : "出错了，请您稍后再试~~~",
  "505" : "出错了，请您稍后再试~~~",

	"serviceurl" : { //自定义接口
		'getParam':'wx/getParam',//获取accesstoken
    /*'login':'loginController/login',*/
    'all':'encrypt/invoke',

  },

  "staticUrl":{
    // 静态json接口，不能和serviceurl的接口同名
    'home': 'json/home.json', // 首页
    'service': 'json/service.json', // 服务页
    'systemMsg': 'json/systemMsg.json', // 系统消息
    'myMsg1': 'json/myMsg1.json', // 我的消息
    'myMsg2': 'json/myMsg2.json', // 我的消息
    'paymentDetail': 'json/paymentDetail.json', // 缴存明细
    'govAffairsPublic': 'json/govAffairsPublic.json', // 政务公开
    'workGuide': 'json/workGuide.json', // 办事指南
    'materials': 'json/materials.json', // 办事指南详细-办理材料

    'villages': 'json/villages.json', // 乡镇
    'workingDepartment': 'json/workingDepartment.json', // 办事部门
    'workingTheme': 'json/workingTheme.json', // 办事主题
    

    'myWork': 'json/myWork.json', // 我的办件
    'noListData': 'json/noListData.json', // 列表 无数据
    'errorList': 'json/errorList.json', // 列表请求出错
  }
};

export default httpserver;
