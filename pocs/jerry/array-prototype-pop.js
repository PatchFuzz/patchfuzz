var array = ["foo", [], Infinity, 4]
assert(array.length === 4);

assert(array.pop() === 4)
assert(array.length === 3);

assert(array.pop() === Infinity);
assert(array.length === 2);

var a = array.pop()
assert(a instanceof Array);
assert(array.length === 1);

assert(array.pop() === "foo");
assert(array.length === 0);

assert(array.pop() === undefined);
assert(array.length === 0);


var obj = { pop : Array.prototype.pop };
Object.defineProperty(obj, 'length', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.pop();
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var obj = { pop : Array.prototype.pop };
Object.defineProperty(obj, 'length', { 'set' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.pop();
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var obj = { pop : Array.prototype.pop };
assert(obj.length === undefined)
assert(obj.pop() === undefined)
assert(obj.length === 0)


var obj = { pop : Array.prototype.pop, length : 1 };
Object.defineProperty(obj, '0', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.pop();
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var obj = {pop : Array.prototype.pop, length : 2};
Object.defineProperty(obj, '1', function () {});

try {
  obj.pop();
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var obj = {pop : Array.prototype.pop, length : 2};
Object.freeze(obj);

try {
  obj.pop();
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
