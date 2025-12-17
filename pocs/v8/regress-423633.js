Object.defineProperty(Array.prototype, '0', {
  get: function() { return false; },
});
var a = [1, 2, 3];
print(a, a.slice());
print([3], a.splice(2, 1));

a = [1, 2, 3];
a[0xffff] = 4;


a.__proto__ = null;
print(a, Array.prototype.slice.call(a));
print([3], Array.prototype.splice.call(a, 2, 1));
