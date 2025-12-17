var objectProxy = new Proxy({}, {});
var functionProxy = new Proxy(function() {}, {});

print(Object.prototype.toString.call(objectProxy), '[object Object]');
print(Object.prototype.toString.call(functionProxy), '[object Function]');

try {
  Function.prototype.toString.call(objectProxy);
  print(true, false);
} catch (e) {
  print(!!/incompatible/.exec(e), true);
}
