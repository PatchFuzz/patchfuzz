var called = false;
Object.prototype.__defineSetter__('x', function(x) { called = true; });
Object.prototype.__defineGetter__('x', function () { return 0; });

this.__proto__ = { x: 1 };

try { meh; } catch (e) { eval('var x = 2'); }

var o = Object.getOwnPropertyDescriptor(this, 'x');
print(called);
print(2, o.value);
print(true, o.writable);
