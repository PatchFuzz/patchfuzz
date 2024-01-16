

var obj = {};
var array = ['Apple', 'Banana', "zero", 0, obj, 'Apple'];

var index = array.at(0);
assert(index === 'Apple');
assert(array[index] === undefined);

assert(array.at(array.length) === undefined);
assert(array.at(array.length+1) === undefined);
assert(array.at(array.length-1) === 'Apple');
assert(array.at("1") === 'Banana');
assert(array.at(-1) === 'Apple');
assert(array.at("-1") === 'Apple');
assert(array.at("-20") === undefined);


var obj = {}
obj.length = 1;
Object.defineProperty(obj, '0', { 'get' : function () {throw new ReferenceError ("foo"); } });
obj.at = Array.prototype.at;

try {
  obj.at(0);
  assert(false);
} catch(e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}

try {
  Array.prototype.at.call(undefined)
  assert (false);
} catch(e) {
  assert(e instanceof TypeError);
}
