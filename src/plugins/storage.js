/* date: 2018/07/16 17:09:49 author: guochao content: 缓存 封装 email: guochao@yinyin360.com */
const storage = {

  _storage: '',

  set: function(name, value, flag) {
    this._storeName(
      flag === true
      ? 'localStorage'
      : 'sessionStorage');
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    };
    this._storage.setItem(name, value);
  },

  get: function(name, flag) {
    this._storeName(
      flag === true
      ? 'localStorage'
      : 'sessionStorage');
    return this._storage.getItem(name);
  },

  remove: function(name, flag) {
    this._storeName(
      flag === true
      ? 'localStorage'
      : 'sessionStorage');
    this._storage.removeItem(name);
  },

  clear: function(flag) {
    this._storeName(
      flag === true
      ? 'localStorage'
      : 'sessionStorage');
    this._storage.clear();
  },

  _storeName: function(name) {
    name && ({'localStorage': 1, 'sessionStorage': 1}).hasOwnProperty(name) && (this._storage = window[name]);
    return this;
  }
}

export default storage;

/*
/**
 * 存储localStorage

export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}
 */
/**
 * 获取localStorage

export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}
 */
/**
 * 删除localStorage

export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}
 */
