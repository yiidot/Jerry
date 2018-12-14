/*
 * @Author: Russ Zhong 
 * @Date: 2018-12-11 14:17:11 
 * @Last Modified by: Russ Zhong
 * @Last Modified time: 2018-12-14 15:05:33
 */

// Functions in this module won't be exposed to users.
// If you wanna expose your utils,write them in src/packages/Util.js

const toString = Object.prototype.toString;
const slice = Array.prototype.slice;
const join = Array.prototype.join;
const hasOwnProp = Object.prototype.hasOwnProperty;

const throwTypeErr = function(msg) {
  throw new TypeError(msg); 
};

module.exports = {
  slice,
  toString,
  join,
  throwTypeErr,
  hasOwnProp
}