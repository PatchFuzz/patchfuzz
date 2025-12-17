var __v_9 = {};
for (var __v_0 = 0; __v_0 < 1000; __v_0++) {
}
__v_2 = { __v_2: 1 };
__v_12 = new Proxy({}, {});
function f() {
  var __v_10 = new Proxy({}, __v_2);
  __v_9.__proto__ = __v_10;
  __v_2.getPrototypeOf = function () { return __v_9 };
  Object.prototype.isPrototypeOf.call(__v_0, __v_10);
};
print(f, RangeError);
