var a = [];
var b = {}
Object.defineProperty(a, "1", {get: function() {return "foo";}});
Object.defineProperty(
    b, "1", {get: function() {return "bar";}, set: function() {this.x = 42;}});
print(a[1], 'foo');
print(b[1], 'bar');


b[1] = 'foobar';
print(b[1], 'bar');
print(b.x, 42);

var desc = Object.getOwnPropertyDescriptor(b, "1");
print(desc['writable'], undefined);
print(desc['enumerable']);
print(desc['configurable']);
