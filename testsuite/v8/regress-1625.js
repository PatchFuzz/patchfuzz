





























Array.prototype.push = 1;
var desc = {foo: {value: 10}, bar: {get: function() {return 42; }}};
var obj = {};
var x = Object.defineProperties(obj, desc);
assertEquals(x.foo, 10);
assertEquals(x.bar, 42);
