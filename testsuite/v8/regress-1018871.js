



var v_this = this;
function f() {
  var obj = {y: 0};
  var proxy = new Proxy(obj, {
    has() { y; },
  });
  Object.setPrototypeOf(v_this, proxy);
  x;
}
assertThrows(f, RangeError);
