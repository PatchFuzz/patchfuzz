















var obj = {};
var array = ["foo", 19, "bar", obj, "foo", 29, "baz"];

var index = array.lastIndexOf("foo");
print(index === 4);
print(array[index] === "foo");

print(array.lastIndexOf("foo", 3) === 0);
print(array.lastIndexOf("foo", -8) === -1);

var index = array.lastIndexOf("baz");
print(index === 6);
print(array[index] === "baz");

print(array.lastIndexOf("baz", -2) === -1);

var index = array.lastIndexOf(obj);
print(index === 3);
print(array[index] === obj);

print(array.lastIndexOf("foo", NaN) === 0);
print(array.lastIndexOf("foo", Infinity) === 4);
print(array.lastIndexOf("foo", -Infinity) === -1);

var arr = [];
arr[4294967294] = "foo";
print(arr.lastIndexOf("foo", -1) === 4294967294)

var arr = [1,2];
print(arr.lastIndexOf(2, undefined) === -1);
print(arr.lastIndexOf(2) === 1);


var obj = { lastIndexOf : Array.prototype.lastIndexOf}
Object.defineProperty(obj, 'length', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.lastIndexOf("bar");
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = { lastIndexOf : Array.prototype.lastIndexOf, length : 1}
Object.defineProperty(obj, '0', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.lastIndexOf("bar");
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var array = [1, 2, 3, 4, 5];
var value = array.lastIndexOf(4, {
    valueOf: function() {
        array.length = 0;
    }
})

print(value === -1);


var array = [1, 2, 3];
var value = array.lastIndexOf(1, {
    valueOf: function() {
        array.length = 5;
    }
})

print(value === 0);


var array = [1, 2, 3, 4, 5, 6, 7];
var value = array.indexOf(5, {
    valueOf: function() {
        array.length = 2;
    }
})

print(value === -1);
