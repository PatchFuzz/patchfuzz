













var obj = {};
var array = ["foo", 19, "bar", obj, "foo", 29, "baz"];

var index = array.indexOf("foo");
print(index === 0);
print(array[index] === "foo");

print(array.indexOf("foo", 1) === 4);
print(array.indexOf("foo", 5) === -1);

var index = array.indexOf("baz");
print(index === 6);
print(array[index] === "baz");

print(array.indexOf("baz", 7) === -1);

var index = array.indexOf(obj);
print(index === 3);
print(array[index] === obj);

print(array.indexOf("foo", NaN) === 0);
print(array.indexOf("foo", Infinity) === -1);
print(array.indexOf("foo", -Infinity) === 0);

print([true].indexOf(true, -0) === 0);


var obj = { indexOf : Array.prototype.indexOf, length : 0 };
print(obj.indexOf("foo") === -1);


var arr = [11, 22, 33, 44];
print(arr.indexOf(44, 4) === -1);

var fromIndex = {
  toString: function () {
    return {};
  },

  valueOf: function () {
    return {};
  }
};

try {
  [0, 1].indexOf(1, fromIndex);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


var obj = { indexOf : Array.prototype.indexOf}
Object.defineProperty(obj, 'length', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.indexOf("bar");
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = { indexOf : Array.prototype.indexOf, length : 1}
Object.defineProperty(obj, '0', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.indexOf("bar");
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var array = [1, 2, 3, 4, 5];
var value = array.indexOf(4, {
    valueOf: function() {
        array.length = 0;
    }
})

print(value === -1);


var array = [1, 2, 3];
var value = array.indexOf(2, {
    valueOf: function() {
        array.length = 5;
    }
})

print(value === 1);


var array = [1, 2, 3, 4, 5, 6, 7];
var value = array.indexOf(6, {
    valueOf: function() {
        array.length = 5;
    }
})

print(value === -1);
