













var get = [];
var constructor = Function();
constructor[Symbol.species] = Object;
var p = new Proxy({ constructor: constructor, flags: '', exec: function() { return /\ua796/iu; } }, { defineProperty: function(o, k) { get.push(k); return o[k]; }});

try {
  RegExp.prototype[Symbol.split].call(p, 7996);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
