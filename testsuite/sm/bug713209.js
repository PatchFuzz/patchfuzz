


load(libdir + "immutable-prototype.js");

var save__proto__ = __proto__;
if (globalPrototypeChainIsMutable())
  __proto__ = save__proto__;

function bar(x, y) {
  return x + y;
}
function foo(x, y) {
  var a = 0;
  for (var i = 0; i < 1000; i++) {
    a += (this.toString);
    a += bar(x, y);
    a = bar(x, (a));
    a += bar(x, y);
  }
  return a;
}
var q = foo(0, 1);
print(q.toString());
