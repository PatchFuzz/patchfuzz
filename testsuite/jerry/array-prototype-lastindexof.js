















var obj = {};
var array = ["foo", 19, "bar", obj, "foo", 29, "baz"];

var index = array.lastIndexOf("foo");
assert(index === 4);
assert(array[index] === "foo");

assert(array.lastIndexOf("foo", 3) === 0);
assert(array.lastIndexOf("foo", -8) === -1);

var index = array.lastIndexOf("baz");
assert(index === 6);
assert(array[index] === "baz");

assert(array.lastIndexOf("baz", -2) === -1);

var index = array.lastIndexOf(obj);
assert(index === 3);
assert(array[index] === obj);

assert(array.lastIndexOf("foo", NaN) === 0);
assert(array.lastIndexOf("foo", Infinity) === 4);
assert(array.lastIndexOf("foo", -Infinity) === -1);

var arr = [];
arr[4294967294] = "foo";
assert(arr.lastIndexOf("foo", -1) === 4294967294)

var arr = [1,2];
assert(arr.lastIndexOf(2, undefined) === -1);
assert(arr.lastIndexOf(2) === 1);


var obj = { lastIndexOf : Array.prototype.lastIndexOf}
Object.defineProperty(obj, 'length', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.lastIndexOf("bar");
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var obj = { lastIndexOf : Array.prototype.lastIndexOf, length : 1}
Object.defineProperty(obj, '0', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.lastIndexOf("bar");
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var array = [1, 2, 3, 4, 5];
var value = array.lastIndexOf(4, {
    valueOf: function() {
        array.length = 0;
    }
})

assert(value === -1);


var array = [1, 2, 3];
var value = array.lastIndexOf(1, {
    valueOf: function() {
        array.length = 5;
    }
})

assert(value === 0);


var array = [1, 2, 3, 4, 5, 6, 7];
var value = array.indexOf(5, {
    valueOf: function() {
        array.length = 2;
    }
})

assert(value === -1);
