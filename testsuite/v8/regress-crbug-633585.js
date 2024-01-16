





function f() { this.x = this.x.x; }
gc();
f.prototype.x = { x:1 }
new f();
new f();

function g() {
  function h() {};
  h.prototype = { set x(value) { } };
  new f();
}
g();
