














Array.prototype.equals = function (array) {
  if (this.length != array.length)
    return false;

  for (var i = 0; i < this.length; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].equals(array[i]))
        return false;
      }
      else if (this[i] != array[i]) {
        return false;
    }
  }

  return true;
}


try {
  [0].map(new Object());
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}


assert ([1, 4, 9].map(Math.sqrt).equals([1, 2, 3]));

assert (isNaN([1, 4, "X"].map(Number)[2]));

var func = function(val, idx) {
  return val + idx;
};

assert ([1, 4, 9].map(func).equals([1,5,11]));

assert ([1, "X", 10].map(func).equals([1, "X1", 12]));

var arr = [1,2,3];
arr.length = 5;
assert(arr.map(func).length === arr.length);

var long_array = [0, 1];
assert (long_array.map(func).equals([0,2]));

long_array[100] = 1;
assert (long_array.map(func).equals([0,2,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,101]));

var arr = [1,2];
Array.prototype[0] = 3;
var newArr = arr.map(function(value) { return value; });
delete Array.prototype[0];
assert(newArr.hasOwnProperty("0"));
assert(newArr[0] === 1);


var obj = {};
Object.defineProperty(obj, 'length', { 'get' : function () {throw new ReferenceError ("foo"); } });
obj.map = Array.prototype.map;

try {
  obj.map(func);
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var obj = {}
obj.length = 1;
Object.defineProperty(obj, '0', { 'get' : function () {throw new ReferenceError ("foo"); } });
obj.map = Array.prototype.map

try {
  obj.map(func);
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var thisArg = {add: 10};
var func2 = function(value) {
  return this.add + value;
}
assert([1,2].map(func2, thisArg).equals([11, 12]));


var array_example = [1,2];
Object.defineProperty(array_example, 'const', { 'get' : function () {return "CT";} });
var func3 = function(value, idx, thisobj) {
  return value * idx + thisobj.const;
}
assert(array_example.map(func3).equals(["0CT", "2CT"]));
