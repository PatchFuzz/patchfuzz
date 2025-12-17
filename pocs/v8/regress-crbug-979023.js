function foo(arg) {
  var ret = { x: arg };
  Object.defineProperty(ret, "y", {
    get: function () { },
    configurable: true
  });
  return ret;
}
let v0 = foo(10);
let v1 = foo(10.5);
Object.defineProperty(v0, "y", {
  get: function () { },
  configurable: true
});
