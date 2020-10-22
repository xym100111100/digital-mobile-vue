/**
* js调用原生webview中间件
*/

var brve = 	{
    versions : function() {
        var u = navigator.userAgent; // app = navigator.appVersion;
        return {// 移动终端浏览器版本信息
            mobile : !!u.match(/AppleWebKit.*Mobile.*/)
            || !!u.match(/AppleWebKit/), // 是否为移动终端
            ios : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
            android : u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
            iPhone : u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者QQHD浏览器
            iPad : u.indexOf('iPad') > -1, // 是否iPad
            webApp : u.indexOf('Safari') == -1
        };
    }(),
    language : (navigator.browserLanguage || navigator.language)
        .toLowerCase()
};
var webviewjs = {
    /**
     * ios专用，当IOS需用调用页面中的JS的时候 funName:函数名称 fun:函数
     */
    addIoJsBridge : function(funName, fun) {
        this.getWebViewBridge(function(bridge) {
            bridge.registerHandler(funName, registFun);
        });
    },
    /**
     * WebViewJavascriptBridge准备完成
     */
    webViewReady : function(callBack) {
        this.getWebViewBridge(callBack);
    },
    /**
     * WebViewJavascriptBridge
     */
    getWebViewBridge : function(callBack) {
        if (brve.versions.ios) {
            if (window.WebViewJavascriptBridge) {
                return callBack(WebViewJavascriptBridge);
            }
            if (window.WVJBCallbacks) {
                return window.WVJBCallbacks.push(callBack);
            }
            window.WVJBCallbacks = [callBack];
            var WVJBIframe = document.createElement('iframe');
            WVJBIframe.style.display = 'none';
            WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
        } else {
            callBack(window.WebViewJavascriptBridge);
        }
    },
    /**
     * android和ios简单的调用后台,不需要任何回到函数
     *
     * motion:调用哪个事件,必传参数,例如saoyisao str:向后台传递的参数,字符串类型,非必传
     * callBack:当需要后台返回数据的时候,传递函数,如果不需要后台返回数据,可以不传该参数,例子function(response){
 * response为IOS回调后的入参 }
     */
    //simpleCall("alibabaPay", JSON.stringify(param));
    simpleCall : function(motion, str, callBack) {
        var that = this;
        this.getWebViewBridge(function(bridge) {
            str = str || "";
            if (bridge) {
                if (callBack) {
                    if (brve.versions.ios) {
                        bridge.callHandler(motion, str, callBack);
                    } else if (brve.versions.android) {
                        var responseData = bridge.callMotion(motion,
                            str);
                        // android需要手动调用
                        if (callBack) {
                            callBack(responseData);
                        }
                    }
                } else {
                    if (brve.versions.ios) {
                        bridge.callHandler(motion, str, function () {});
                    }else{
                        bridge.callMotion(motion, str);
                    }
                }
            }
        });
    }
}
export default  webviewjs;
