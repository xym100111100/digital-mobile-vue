/* date: 2018/07/15 16:12 author: guochao content: 封装axios服务请求 email: guochao@yinyin360.com */
import axios from 'axios';
import httpserver from './httpPrompt';
import des from '../plugins/des';
import env from './env';
import { Toast } from 'vant';

//封装axios的方法
const service = {
  defaultParam: {
    url: null, //路径
    data: {}, //数据格式json
    loading: false,  //是否显示加载框，一般查询请求不加，否则会页面闪
    toastFail: true, //请求出错时是否弹出提示，默认是
    //isResolve:true,   是否统一处理请求响应，默认处理，false自己处理
    encryption: true, //des 加密请求数据
    requestUrl: '0',//默认是0
  },
  doServer: function (param) {
    //组装params
    param.data = Object.assign({
      // 'appId': '1580387213331704',
      // 'sysId': 'demo',
    }, param.data);
    // console.info("请求参数:"+JSON.stringify(param))
    var temp_param = Object.assign({}, this.defaultParam, param), //浅拷贝
      url = temp_param.url;
    //过滤掉标签，防止xss
    var dataStr = JSON.parse(JSON.stringify(temp_param.data).replace(/<[^>]+>/g, ""));
    temp_param.data = Object.assign({}, temp_param.data, dataStr);
    //检查接口是否在存在配置中
    // if (httpserver['serviceurl'].hasOwnProperty(url)) {
    //   temp_param.url = httpserver['serviceurl'][url];
    //   // console.log(temp_param.url)
    // } else if (httpserver['staticUrl'].hasOwnProperty(url)) {
    //   temp_param.url = httpserver['staticUrl'][url];
    //   temp_param.method = 'GET'; // 本地json只支持get请求
    // } else {
    //   throw new Error("请填入合法的url,检查utils/httpserver.js中serviceurl配置!");
    // }
    return this.doAxios(temp_param);
  },
  doAxios: function (params) {

    var dataStr = '';
    var URL = '';
    if (params.requestUrl == '0') {
      URL = env.baseUrl;
    }

    // 是否是静态json请求
    let isStatic = typeof params.isStatic === 'boolean' ? params.isStatic : false;

    // 如果是静态json请求
    if (isStatic) {
      URL = env.staticPath;
    }
    
    dataStr = params.data
    //  printLog("请求参数:");
    //  printLog(params.data);
    // if (params.encryption) {
    //   dataStr = des.encryptJsonStr(params.data); //加密请求数据
    // } else {
    //   dataStr = JSON.stringify(params.data);
    // }
    //创建axios实例
    const axiosInstance = axios.create({
      baseURL: URL, //api的baseURL
      timeout: 30000, //请求超时时间
      responseType: 'text', //返回数据类型. des加密过后是字符串。不是json,默认为json
      headers: params.headers ? params.headers : {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': '*/*',
        'Content-Type': 'application/json;charset=utf-8'
      },
      maxContentLength: 2000
    });
    //添加request 拦截器 对http request 拦截
    axiosInstance.interceptors.request.use(function (config) {
      // console.log(config);
      if (params.loading) {
        Toast.loading({
          forbidClick: true,
          message: '加载中...',
          duration: 0
        });
      }
      //在请求前做。。。
      return config;
    }, function (error) {
      console.log(error);
      //对错误请求做。。。
      return Promise.reject(error);
    });
    //添加response 拦截器
    axiosInstance.interceptors.response.use(function (response) {
      params.loading && Toast.clear();

      var data = response.data;
      //对respone data 做。。。。
      console.log("服务器返回结果:", data);


      // 是否是静态json请求
      let isStatic = typeof params.isStatic === 'boolean' ? params.isStatic : false;

      // if (!isStatic && params.encryption) {
      //   // printLog("服务器返回结果:");

      //   // console.log('data:', JSON.parse( des.decryptByDES(data)));
      //  // data = des.decryptByDES(data);
      // }
      try {

        //判断objec是否是对象，如果data已经是对象，不用转换
        if (typeof data !== 'object') {
          data = JSON.parse(data);
        }
        // printLog(data);

      } catch (e) {
        // 转换出错
        data = {
          status: -1,
          msg: '服务异常，请联系开发人员'
        }
      }
      // console.log('params:', params);
      // console.log('data:', data);


      // 返回码不是200的全部设置为错误
      if (data.code !== 200 && !isStatic) {
        params.toastFail && Toast.fail(data.msg || data.respDesc);
        return Promise.reject({ respDesc: data.respDesc, respCode: data.code, msg: data.msg });
      }


      return Promise.resolve(data);
    }, function (error) {
      // 404等错误
      params.loading && Toast.clear();
      var status = error.response.status;
      if (httpserver.hasOwnProperty(status)) {
        // console.log(httpserver[status]);
        params.toastFail && Toast.fail(httpserver[status]);
      } else {
        params.toastFail && Toast.fail("出错了，请您稍后再试~~~");
      }
      //对response error 做。。。
      return Promise.reject({ errorMessage: httpserver[status], errorCode: status });
    });
    //返回的axios对象
    if (params.method == 'POST') {
      if (params.paramType === 1) {
        return axiosInstance.post(params.url + "?" + params.param, dataStr);
      } else {
        return axiosInstance.post(params.url, dataStr);
      }
    } else {
      return axiosInstance.get(params.url, { params: dataStr });
    }

  },
  doServiceForm: function (params) {
    let defaultParam = {
      url: "",//路径
      data: {},//数据json格式
      loading: true,
    },
      url = params.url;

    if (httpserver['serviceurl'].hasOwnProperty(url)) {
      params.url = httpserver['serviceurl'][url];
    } else {
      throw new Error("请填入合法的url,检查utils/httpserver.js中serviceurl配置!");
    }
    params.url = httpserver.payUrl + params.url;

    params = Object.assign({}, defaultParam, params);
    var hide_form = "<form id='hide_form' action='" + params.url + "' style='display:none;' method='post'></form>";
    $("body").append(hide_form);
    //发送请求begin
    if ($.isPlainObject(params.data)) {
      for (var key in params.data) {
        $("#hide_form").append("<input name='" + key + "' value='" + params.data[key] + "'/>");
      }
    } else {
      console.log("data必须为json对象");
    }
    //发送请求end
    document.getElementById('hide_form').submit();
  },

}

function printLog(msg) {
  if (process.env.NODE_ENV === 'development') {
    console.info(msg)
  }
}

export default {
  doPost: function (param) {
    param.method = 'POST';
    return service.doServer(param);
  },
  doGet: function (param) {
    param.method = "GET";
    return service.doServer(param);
  },
  doServiceForm: function (param) {
    return service.doServiceForm(param)
  }
}
