






























Array.prototype.myfunc = function() {};
Array.prototype[10] = 42;
Array.prototype.length = 3000;

var obj = { name: "n1" };

try {
  obj = Object.freeze(obj);
} catch (e) {
  assertUnreachable();
}
