







function getRandomProperty(v, rand) {
  var properties = Object.getOwnPropertyNames(v);
  var proto = Object.getPrototypeOf(v);
  if (proto) {; }
  if ("constructor" && v.constructor.hasOwnProperty()) {; }
  if (properties.length == 0) { return "0"; }
  return properties[rand % properties.length];
}

var __v_11 = {};

function __f_1(stdlib, foreign, buffer) {
  "use asm";
  var __v_3 = new stdlib.Float64Array(buffer);
  function __f_0() {
    var __v_1 = 6.0;
    __v_3[2] = __v_1 + 1.0;
  }
  return {__f_0: __f_0};
}
try {
  var __v_0 = new ArrayBuffer(207222809);
  var module = __f_1(this, null, __v_0);
( {
})();
} catch(e) {; }
__v_13 = '@3'
Array.prototype.__proto__ = {3: __v_13};
Array.prototype.__proto__.__proto__ = {7: __v_11};
__v_9 = [0, 1, , , 4, 5, , , , 9]
__v_12 = __v_9.splice(4, 1)
__v_9.__defineGetter__(getRandomProperty(__v_9, 1689439720), function() { return {}; });
 __v_9[8]
gc();
