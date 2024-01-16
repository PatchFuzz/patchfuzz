





























var called = false;
Object.prototype.__defineSetter__('x', function(x) { called = true; });
Object.prototype.__defineGetter__('x', function () { return 0; });

this.__proto__ = { x: 1 };

try { fail; } catch (e) { eval('var x = 2'); }

var o = Object.getOwnPropertyDescriptor(this, 'x');
assertFalse(called);
assertEquals(2, o.value);
assertEquals(true, o.writable);
