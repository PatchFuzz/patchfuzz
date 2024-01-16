






























var a = {};
Object.defineProperty(a, 'b',
                      { get: function () { return 42; }, configurable: false });

try {
  a.__defineGetter__('b', function _b(){ return 'foo'; });
} catch (e) {}
assertEquals(42, a.b);
var desc = Object.getOwnPropertyDescriptor(a, 'b');
assertFalse(desc.configurable);
