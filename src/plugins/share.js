import axios from '../utils/service'
import wx from 'weixin-js-sdk'
let wxCommon = {
  hideMenu(){
    let curUrl = window.location.href.split('#')[0];
    curUrl = encodeURI(curUrl);
    axios.doPost({
      url: 'getParam',
      data: {
        url: curUrl,
        channelNo:'wx_cyfwzx'
      },
    }).then(data => {
      // console.log(data);
      //加载
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名，见附录1
        jsApiList: ['hideAllNonBaseMenuItem','scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
      wx.ready(function() {
        wx.hideAllNonBaseMenuItem();
      });
      wx.error(function(res) {
        // console.info("失败的时候===:" + JSON.stringify(res));
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      });
      wx.checkJsApi({
        jsApiList: ['hideAllNonBaseMenuItem','scanQRCode'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        success: function(res) {
          // console.info("检测jssdk接口:"+JSON.stringify(res));
        },
        fail: function(res) {
          // alert("检测jssdk接口失败"+JSON.stringify(res));
        }
      });
    }).catch(error => {
      // console.log(error);
    })
  }
};
export default wxCommon;
