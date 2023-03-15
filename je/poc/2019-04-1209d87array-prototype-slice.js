















var array = [54, undefined, "Lemon", -127];

var array1 = array.slice();
var array2 = array.slice("a", "3");
var array3 = array.slice(-2);
var array4 = array.slice(-12, undefined);
var array5 = array.slice(undefined, -3);
var array6 = array.slice(Infinity, NaN);
var array7 = array.slice(-Infinity, Infinity);
var array8 = array.slice(NaN, -Infinity);

print(array1.length == 4);
print(array1[0] == 54);
print(array1[1] == undefined);
print(array1[2] == "Lemon");
print(array1[3] == -127);

print(array2.length == 3);
print(array2[0] == 54);
print(array2[1] == undefined);
print(array2[2] == "Lemon");

print(array3.length == 2);
print(array3[0] == "Lemon");
print(array3[1] == -127);

print(array4.length == 4);
print(array4[0] == 54);
print(array4[1] == undefined);
print(array4[2] == "Lemon");
print(array4[3] == -127);

print(array5.length == 1);
print(array5[0] == 54);

print(array6.length == 0);

print(array7.length == 4);
print(array7[0] == 54);
print(array7[1] == undefined);
print(array7[2] == "Lemon");
print(array7[3] == -127);

print(array8.length == 0);

var array = [];
array[4294967293] = "foo";
array.length = 4294967295;
var result = array.slice(4294967293, -1)
print(result.length === 1)
print(result[0] === "foo")

array[0] = "bar";
var result = array.slice(-4294967295, -4294967294)
print(result.length === 1)
print(result[0] === "bar")

var array = [];
array[0] = "foo";
var result = array.slice(4294967296, 4294967297);
print(result.length === 0);

array[4294967293] = "bar";
var result = array.slice(-4294967297, -4294967296);
print(result.length === 0);

var arr = [1,2];
Array.prototype[0] = 3;
var newArr = arr.slice(0, 1);
delete Array.prototype[0];
print(newArr.hasOwnProperty("0"));
print(newArr[0] === 1);


var obj = { slice : Array.prototype.slice };
Object.defineProperty(obj, 'length', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.slice(1, 2);
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = { length : 1, slice : Array.prototype.slice };
Object.defineProperty(obj, '0', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.slice(0, 1);
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var arg1 = { };
Object.defineProperty(arg1, 'valueOf', { 'get' : function () { throw new ReferenceError ("foo"); } });
var obj = { slice : Array.prototype.slice };

try {
  obj.slice(arg1);
  print(false);
} catch (e) {
  print(e.message === 'foo');
  print(e instanceof ReferenceError);
}


var arg2 = { };
Object.defineProperty(arg2, 'valueOf', { 'get' : function () { throw new ReferenceError ("foo"); } });
var obj = { slice : Array.prototype.slice };

try {
  obj.slice(0, arg2);
  print(false);
} catch (e) {
  print(e.message === 'foo');
  print(e instanceof ReferenceError);
}


var obj = { length : 3, slice : Array.prototype.slice };
Object.defineProperty(obj, '1', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.slice(0, 3);
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}

function array_check(result_array, expected_array) {
  print(result_array instanceof Array);
  print(result_array.length === expected_array.length);
  for (var idx = 0; idx < expected_array.length; idx++) {
    print(result_array[idx] === expected_array[idx]);
  }
}


var array = [1, 2, 3, 4, 5];
var value = array.slice(4, {
    valueOf: function() {
        array.length = 0;
    }
})

array_check(value, []);


var array = [1, 2, 3, 4, 5];
var value = array.slice(6, {
    valueOf: function() {
        array.length = 10;
    }
})

array_check(value, []);


var array = [1, 2, 3, 4, 5];
var value = array.slice(1, {
    valueOf: function() {
        array.length = 3;
    }
})

array_check(value, []);


class LongArray extends Array {
  constructor(len) {
      super (42);
      this.fill ("foo");
  }
}

var a = new LongArray (5);
a.length = 5;
var sliced = a.slice ();
print(sliced.length == 5);
print(JSON.stringify (sliced) == '["foo","foo","foo","foo","foo"]')


class ShortArray extends Array {
  constructor(len) {
      super (2);
      this.fill ("bar");
  }
}

var b = new ShortArray (8);
b.length = 8;
b.fill ("asd", 2);
var sliced2 = b.slice ();
print(sliced2.length == 8);
print(JSON.stringify (sliced2) == '["bar","bar","asd","asd","asd","asd","asd","asd"]');


class ExactArray extends Array {
  constructor(len) {
      super (len);
      this.fill ("baz");
  }
}

var c = new ExactArray (5);
var sliced3 = c.slice();
print(sliced3.length == 5);
print(JSON.stringify (sliced3) == '["baz","baz","baz","baz","baz"]');
