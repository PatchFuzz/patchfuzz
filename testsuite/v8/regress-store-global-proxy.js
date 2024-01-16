



delete Object.prototype.__proto__;

function f() {
  this.toString = 1;
}

f.apply({});
f();
