













var array = ["foo", [], Infinity, 4];

function f(arg1, arg2, arg3) {
  assert(arg1 === array[arg2]);
  assert(arg3 === array);
  return true;
}

assert(array.every(f) === true);

function g(arg1, arg2, arg3) {
  if (arg1 === 1) {
    return true;
  } else {
    return false;
  }
}

var arr1 = [1, 1, 1, 1, 1, 2];
assert(arr1.every(g) === false);

var arr2 = [1, 1, 1, 1, 1, 1];
assert(arr2.every(g) === true);


var obj = { every : Array.prototype.every };
Object.defineProperty(obj, 'length', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.every(f);
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var obj = { every : Array.prototype.every, length : 1};
Object.defineProperty(obj, '0', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.every(f);
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}
