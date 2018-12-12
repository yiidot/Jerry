/*
 * @Author: Russ Zhong 
 * @Date: 2018-12-10 17:13:16 
 * @Last Modified by: Russ Zhong
 * @Last Modified time: 2018-12-12 17:48:44
 */

const { toString, slice } = require('../utils');

/**
 * 混淆函数，实现浅拷贝
 * @param {Object} des 拷贝的目标对象
 * @param {Object} source 拷贝的源对象
 */
function mixin (des, source) {
  if (arguments.length === 0) throw new TypeError('mixin 函数的参数个数不得小于 1！');
  if (des && source) _mixin(des, source);
}

function _mixin (dest, source) {
  for (let key in source) {
    dest[key] = source[key];
  }
  return dest;
}

function isFunction (param) {
  return toString.call(param) === '[object Function]';
}

function isNumber (param) {
  return toString.call(param) === '[object Number]';
}

function isPlainObject (param) {
  if (!isObject(param)) return false;
  let proto = param;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(param) === proto;
}

function isObject (param) {
  if (isUndefined(param) || isNull(param)) return false;
  return toString.call(param) === '[object Object]';
}

function isString(param) {
  return toString.call(param) === '[object String]'
}

function isArray(param) {
  return toString.call(param) === '[object Array]' && Array.isArray(param);
}

function isArrayLike(param) {
  let hasLengthProp = isNumber(param.length);
  return !isArray(param) && hasLengthProp;
}

function isNaN(param) {
  return param !== param;
}

function isSymbol(param) {
  return toString.call(param) === '[object Symbol]' && typeof param === 'symbol';
}

function isRegExp(param) {
  return toString.call(param) === '[object RegExp]';
}

function isDate(param) {
  return toString.call(param) === '[object Date]';
}

function isUndefined(param) {
  return param === void 0;
}

function isNull(param) {
  return param === null;
}

function isFalsy(param) {
  let falsyArr = [0, false, undefined, null, '', NaN];
  return falsyArr.includes(param);
}

/**
 * 遍历对象或数组，对操作对象的属性或元素做处理
 * @param {Object|Array} param 要遍历的对象或数组
 * @param {Function} callback 回调函数
 */
function each(param, callback) {
  if (isFalsy(param) || !isFunction(callback)) throw new TypeError('param 必须为对象或者数组，callback 必须是函数！');
  if (isArray(param) || isArrayLike(param)) {
    for (let i = 0; i < param.length; i++) {
      callback(param[i], i, param);
    }
  } else if (isObject(param)) {
    for (let val in param) {
      callback(param[val], val, param);
    }
  } else {
    throw new TypeError('each 的参数必须是 JavaScript 对象、数组或者类数组对象！');
  }
}

/**
 * 遍历数组、类数组对象或对象，返回一个对应的数组
 * @param {Object|Array} param 要遍历的对象、数组或类数组对象
 * @param {Function} callback 要使用的回调函数
 */
function map(param, callback) {
  let res = [];
  each(param, (v, k, o) => {
    res.push(callback(v, k, o));
  });
  return res;
};

function reduce(param, callback, initVal) {
  if (isUndefined(initVal)) {
    each(slice.call(param, 1), callback(initVal, ))
  } else {
    
  }
}

module.exports = {
  mixin,
  isFunction,
  isNumber,
  isPlainObject,
  isObject,
  isString,
  isArray,
  isArrayLike,
  isNaN,
  isSymbol,
  isRegExp,
  isDate,
  isUndefined,
  isNull,
  isFalsy,
  each,
  map
};