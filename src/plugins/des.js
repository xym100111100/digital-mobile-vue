/* date: 2018/07/14 15:45:49 author: guochao content: 服务请求 加密 解密 email: guochao@yinyin360.com */
import CryptoJS from './tripledes.js'
var des = {
  key: "6Ta4OaTYdic=",
  /**
		 * 加密数据
		 */
  encryptByDES: function(message) {
    var keyHex = CryptoJS.enc.Utf8.parse(this.key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  },
  /**
		 * 解密数据
		 */
  decryptByDES: function(ciphertext) {
    var keyHex = CryptoJS.enc.Utf8.parse(this.key);

    // direct decrypt ciphertext
    var decrypted = CryptoJS.DES.decrypt({
      ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
    }, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  },
  encryptObj: function(tempData) {
    if (typeof tempData == "object") {
      if ($.isArray(tempData)) {
        tempData = this.encryptArray(tempData);
      } else {
        tempData = this.encryptJsonData(tempData);
      }
    } else {
      tempData = this.encryptByDES(tempData);
    }
    return tempData;
  },
  encryptJsonData: function(tData) {
    var ensData = {},
      data = tData || {};
    for (var key in data) {
      var tempData = data[key];
      ensData[this.encryptByDES(key)] = this.encryptObj(data[key]);
    }
    return ensData;
  },
  encryptArray: function(tArray) {
    var ensArray = [],
      array = tArray || [];
    for (var i = 0; i < array.length; i++) {
      ensArray.push(this.encryptObj(array[i]));
    }
    return ensArray;
  },
  encryptJsonStr: function(data) {
    var ensData = this.encryptByDES(JSON.stringify(data));
    return ensData;
  }
}
export default des;
