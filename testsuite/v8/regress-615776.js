



Object.defineProperty(Int32Array.prototype.__proto__, 'length', {
  get: function() { throw new Error('Custom length property'); }
});

var a = Math.random();


var v0 = new Set();
var v1 = new Object();
v0.add(v1);
