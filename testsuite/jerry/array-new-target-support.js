













function F (){}
var obj = Reflect.construct (Array, [], F);
obj[2] = 'foo';
assert (obj.length === 3 && obj instanceof F);

try {
  Reflect.construct (Array, [-1], F);
} catch (e) {
  assert (e instanceof RangeError);
}

var o = new Proxy (function f () {}, { get (t,p,r) { if (p == "prototype") { throw "Kitten" } Reflect.get (...arguments) }})

try {
  Reflect.construct (Array, [], o)
} catch (e) {
  assert (e === "Kitten");
}
