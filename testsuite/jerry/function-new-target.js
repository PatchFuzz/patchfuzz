













var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;

assert(get + '' === "prototype");

var func = function() {}
var reflect = Reflect.construct(Function, ['a','b','return a+b'], func);
assert(Object.getPrototypeOf(reflect) == func.prototype);

var o = new Proxy (function f () {}, { get(t,p,r) { if (p == "prototype") { throw 42 }}})

try {
  Reflect.construct(Function, [], o);
  assert(false);
} catch (e) {
  assert(e === 42);
}
