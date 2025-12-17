function f() {
  this.a = { text: "Hello!" };
}
var v4 = new f();
var v7 = new f();
v7.b = {};
Object.defineProperty(v4, '2', {});
var v6 = new f();
v6.a = {};
