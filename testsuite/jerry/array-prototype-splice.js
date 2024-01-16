















function setDefaultValues()
{
  return [54, undefined, -127, "sunshine"];
}

var array = setDefaultValues();
var array1 = array.splice();

assert (array.length == 4);
assert (array[0] == 54);
assert (array[1] == undefined);
assert (array[2] == -127);
assert (array[3] == "sunshine");
assert (array1.length == 0);


array = setDefaultValues(); 
var array2 = array.splice(2);

assert (array.length == 2);
assert (array[0] == 54);
assert (array[1] == undefined);
assert (array2.length == 2);
assert (array2[0] == -127);
assert (array2[1] == "sunshine");


array = setDefaultValues(); 
var array3 = array.splice(2, 1);

assert (array.length == 3);
assert (array[0] == 54);
assert (array[1] == undefined);
assert (array[2] == "sunshine");
assert (array3.length == 1);
assert (array3[0] == -127);


array = setDefaultValues(); 
var array4 = array.splice(0, 3, 6720, "Szeged");

assert (array.length == 3);
assert (array[0] == 6720);
assert (array[1] == "Szeged");
assert (array[2] == "sunshine");
assert (array4.length == 3);
assert (array4[0] == 54);
assert (array4[1] == undefined);
assert (array4[2] == -127);


array = setDefaultValues(); 
var array5 = array.splice(-2, -2, 6720, "Szeged");

assert (array.length == 6);
assert (array[0] == 54);
assert (array[1] == undefined);
assert (array[2] == 6720);
assert (array[3] == "Szeged");
assert (array[4] == -127);
assert (array[5] == "sunshine");
assert (array5.length == 0);


array = setDefaultValues(); 
var array6 = array.splice(undefined, undefined, undefined);

assert (array.length == 5);
assert (array[0] == undefined);
assert (array[1] == 54);
assert (array[2] == undefined);
assert (array[3] == -127);
assert (array[4] == "sunshine");
assert (array6.length == 0);


array = setDefaultValues(); 
var array7 = array.splice(Infinity, NaN);
assert (array.length == 4);
assert (array[0] == 54);
assert (array[1] == undefined);
assert (array[2] == -127);
assert (array[3] == "sunshine");
assert (array7.length == 0);


array = setDefaultValues(); 
var array8 = array.splice(-Infinity, Infinity);

assert (array.length == 0);
assert (array8.length == 4);
assert (array8[0] == 54);
assert (array8[1] == undefined);
assert (array8[2] == -127);
assert (array8[3] == "sunshine");


array = setDefaultValues(); 
var array9 = array.splice(NaN, -Infinity);
assert (array.length == 4);
assert (array[0] == 54);
assert (array[1] == undefined);
assert (array[2] == -127);
assert (array[3] == "sunshine");
assert (array9.length == 0);


array = setDefaultValues(); 
var array10 = array.splice(-3, 4, Infinity, "university");
assert (array.length == 3);
assert (array[0] == 54);
assert (array[1] == Infinity);
assert (array[2] == "university");
assert (array10.length == 3);
assert (array10[0] == undefined);
assert (array10[1] == -127);
assert (array10[2] == "sunshine");

var array = [];
array[4294967294] = "foo";
var result = array.splice(4294967294, 1, "x")
assert(result.length === 1)
assert(result[0] === "foo")
assert(array[4294967294] === "x")

array[0] = "bar";
var result = array.splice(-4294967295, 1, "y");
assert(result.length === 1)
assert(result[0] === "bar")
assert(array[0] === "y")

var arr = [1,2];
Array.prototype[0] = 3;
var newArr = arr.splice(0, 1);
delete Array.prototype[0];
assert(newArr.hasOwnProperty("0"));
assert(newArr[0] === 1);


var obj = {splice : Array.prototype.splice};
Object.defineProperty(obj, 'length', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.splice(1, 2, "item1", "item2");
  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}


var obj = {length : 1, splice : Array.prototype.splice};
Object.defineProperty(obj, '0', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.splice(0, 1, "item1", "item2");
  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}


try {
  var o = {};
  Object.defineProperty(o, 'toString', { 'get' : function() { throw new ReferenceError("1"); } });
  [1, 2].splice(o);
  assert(false);
} catch (e) {
  assert(e instanceof ReferenceError);
  assert(e.message == "1");
}


try {
  var o = {};
  Object.defineProperty(o, 'toString', { 'get' : function() { throw new ReferenceError("2"); } });
  [1, 2].splice(1, o);
  assert(false);
} catch (e) {
  assert(e instanceof ReferenceError);
  assert(e.message == "2");
}


try {
  var a = [1, 5, 6, 7, 8, 5];
  Object.defineProperty(a, '0', { 'get' : function() { throw new ReferenceError("foo0"); } });
  Array.prototype.splice.call(a, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3);
  assert(false);
} catch (e) {
  assert(e instanceof ReferenceError);
  assert(e.message == "foo0");
}


function f0() { throw new TypeError("4"); };

try {
  obj = {get: f0, valueOf : f0, toString: f0};
  arr = [1, 2, obj, 4, 5];
  Object.defineProperty(arr, '4', { 'get' : f0 });
  arr.splice(1, 3, obj);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
  assert(e.message == "4");
}


function f() {
  delete arr[3];
  arr.length = 13;
  Object.defineProperty(arr, '5', function() { });
};

try {
  obj = {get: f, valueOf : f, toString: f};
  arr = [1, 2, obj, 4, 5];
  Object.defineProperty(arr, '2',{ 'get' : f } );
  for(var i = 0; i < arr.length; i++) {
    var a = arr[i];
  }
  arr.splice(1, 4, obj);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


function f1() {
  for(var i = 0; i < arr.length; i++) {
    delete arr[i];
  }
};

try{
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  delete arr[2];
  Object.defineProperty(arr, '2', { 'get' : f1 });
  arr.splice(1, 7, 5);
} catch (e) {
  assert(e instanceof TypeError);
}


function f2() {
  for(var i = 0; i < arr.length; i++) {
    delete arr[i];
  }
};

try {
  obj = {get: f2, valueOf : f2, toString: f2 };
  arr = [1, 2, obj, 4, 5];
  for(var i = 0; i < 6; i++) {
    Object.defineProperty(arr, i, { 'get' : f2 });
  }
  arr.splice(1, 3, obj);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


function f3() { throw new TypeError("6");};

try {
  arr = [1, 2, 4, 5];
  Object.defineProperty(arr, '4',{ 'get' : f3 });
  arr.splice(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
  assert(e.message == "6");
}


function f4() { delete arr[23]; };

try {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  delete arr[23];
  Object.defineProperty(arr, '23', { 'get' : f4 });
  arr.splice(1, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


function f5() {
  for(var i = 0; i < arr.length; i++) {
    delete arr[i];
  }
};

try {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  delete arr[23];
  Object.defineProperty(arr, '23', { 'get' : f5 });
  arr.splice(1, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


function f6() {
  for(var i = 0; i < arr.length; i++) {
    delete arr[i];
  }
};

try {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  delete arr[2];
  Object.defineProperty(arr, '2', { 'get' : f6 });
  arr.splice(1, 7, 5, 5, 5, 5);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


try {
  arr = [];
  Object.defineProperty(arr, 'length', { value : 999, writable: false });
  arr.splice(1, 2, 4, 5);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
