













var array = ["foo", [], Infinity, 4]

function f(arg1, arg2, arg3) {
  assert(arg1 === array[arg2]);
  assert(arg3 === array);
}

array.forEach(f);


var obj = {};
Object.defineProperty(obj, 'length', { 'get' : function () {throw new ReferenceError ("foo"); } });
obj.forEach = Array.prototype.forEach;

try {
  obj.forEach(f);
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var obj = {}
obj.length = 1;
Object.defineProperty(obj, '0', { 'get' : function () {throw new ReferenceError ("foo"); } });
obj.forEach = Array.prototype.forEach

try {
  obj.forEach(f);
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}
