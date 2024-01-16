













function f(a,b,c) {
  var args = Array.prototype.slice.call(arguments, 3);
  assert (typeof args.splice === "function");
}
f();
