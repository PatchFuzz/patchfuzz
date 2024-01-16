




























var a = [];
var b = {}
Object.defineProperty(a, "1", {get: function() {return "foo";}});
Object.defineProperty(
    b, "1", {get: function() {return "bar";}, set: function() {this.x = 42;}});
assertEquals(a[1], 'foo');
assertEquals(b[1], 'bar');


b[1] = 'foobar';
assertEquals(b[1], 'bar');
assertEquals(b.x, 42);

var desc = Object.getOwnPropertyDescriptor(b, "1");
assertEquals(desc['writable'], undefined);
assertFalse(desc['enumerable']);
assertFalse(desc['configurable']);
