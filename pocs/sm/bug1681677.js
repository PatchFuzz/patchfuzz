var a = [1];
var p = {__proto__: Array.prototype};
Object.setPrototypeOf(a, p);
for (var i = 0; i < 100; ++i) {
  var x = a.slice(0);
  print(x.__proto__, Array.prototype);
}
