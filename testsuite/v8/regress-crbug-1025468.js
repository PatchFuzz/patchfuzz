



function f() {
  class H {
    ['h']() {}
  }
  let h = H.prototype.h;
  h[1024] = {};
  h["XXX"] = {};
  h[-1] = {};
}
f();
f();
