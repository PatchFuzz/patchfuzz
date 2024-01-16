













var array = ["foo", [], Infinity, 4];

function f(arg1, arg2, arg3) {
  assert(arg1 === array[arg2]);
  assert(arg3 === array);
  return false;
}

assert(array.some(f) === false);

function g(arg1, arg2, arg3) {
  if (arg1 === 1) {
    return true;
  } else {
    return false;
  }
}

var arr1 = [2, 2, 2, 2, 2, 2];
assert(arr1.some(g) === false);

var arr2 = [2, 2, 2, 2, 2, 1];
assert(arr2.some(g) === true);


var obj = { some : Array.prototype.some };
Object.defineProperty(obj, 'length', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.some(f);
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var obj = { some : Array.prototype.some, length : 1};
Object.defineProperty(obj, '0', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.some(f);
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}
