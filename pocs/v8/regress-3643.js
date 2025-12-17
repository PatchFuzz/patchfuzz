function newArrayWithGetter() {
  var arr = [1, 2, 3];
  Object.defineProperty(arr, '1', {
    get: function() { delete this[1]; return undefined; },
    configurable: true
  });
  return arr;
}

var a = newArrayWithGetter();
var s = a.slice(1);
print('0' in s);


a = newArrayWithGetter();
a[0xffff] = 4;
s = a.slice(1);
print('0' in s);

a = newArrayWithGetter();
a.shift();
print('0' in a);

a = newArrayWithGetter();
a.unshift(0);
print('2' in a);
