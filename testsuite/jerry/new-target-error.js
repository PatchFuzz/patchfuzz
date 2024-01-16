













function F (){}
var obj = Reflect.construct (Error, [], F);
obj[2] = 'foo';
assert (obj instanceof F);

try {
  Reflect.construct (Error, [-1], F);
} catch (e) {
  assert (e instanceof RangeError);
}

var o = new Proxy (function f () {}, { get (t,p,r) { if (p == "prototype") { throw "34" } Reflect.get (...arguments) }})

try {
  Reflect.construct (Error, [], o)
} catch (e) {
  assert (e === "34");
}
