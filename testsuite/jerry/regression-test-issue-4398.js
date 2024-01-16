













var get = [];
var constructor = Function();
constructor[Symbol.species] = Object;
var p = new Proxy({ constructor: constructor, flags: '', exec: function() { return null; } }, { set: function (x) { this.set = x === 42; } });

try {
  RegExp.prototype[Symbol.split].call(p, 7996);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
