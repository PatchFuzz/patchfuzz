















function setDefaultValues()
{
  return [54, undefined, -127, "sunshine"];
}

var array = setDefaultValues();
var array1 = array.splice();

print(array.length == 4);
print(array[0] == 54);
print(array[1] == undefined);
print(array[2] == -127);
print(array[3] == "sunshine");
print(array1.length == 0);


array = setDefaultValues(); 
var array2 = array.splice(2);

print(array.length == 2);
print(array[0] == 54);
print(array[1] == undefined);
print(array2.length == 2);
print(array2[0] == -127);
print(array2[1] == "sunshine");


array = setDefaultValues(); 
var array3 = array.splice(2, 1);

print(array.length == 3);
print(array[0] == 54);
print(array[1] == undefined);
print(array[2] == "sunshine");
print(array3.length == 1);
print(array3[0] == -127);


array = setDefaultValues(); 
var array4 = array.splice(0, 3, 6720, "Szeged");

print(array.length == 3);
print(array[0] == 6720);
print(array[1] == "Szeged");
print(array[2] == "sunshine");
print(array4.length == 3);
print(array4[0] == 54);
print(array4[1] == undefined);
print(array4[2] == -127);


array = setDefaultValues(); 
var array5 = array.splice(-2, -2, 6720, "Szeged");

print(array.length == 6);
print(array[0] == 54);
print(array[1] == undefined);
print(array[2] == 6720);
print(array[3] == "Szeged");
print(array[4] == -127);
print(array[5] == "sunshine");
print(array5.length == 0);


array = setDefaultValues(); 
var array6 = array.splice(undefined, undefined, undefined);

print(array.length == 5);
print(array[0] == undefined);
print(array[1] == 54);
print(array[2] == undefined);
print(array[3] == -127);
print(array[4] == "sunshine");
print(array6.length == 0);


array = setDefaultValues(); 
var array7 = array.splice(Infinity, NaN);
print(array.length == 4);
print(array[0] == 54);
print(array[1] == undefined);
print(array[2] == -127);
print(array[3] == "sunshine");
print(array7.length == 0);


array = setDefaultValues(); 
var array8 = array.splice(-Infinity, Infinity);

print(array.length == 0);
print(array8.length == 4);
print(array8[0] == 54);
print(array8[1] == undefined);
print(array8[2] == -127);
print(array8[3] == "sunshine");


array = setDefaultValues(); 
var array9 = array.splice(NaN, -Infinity);
print(array.length == 4);
print(array[0] == 54);
print(array[1] == undefined);
print(array[2] == -127);
print(array[3] == "sunshine");
print(array9.length == 0);


array = setDefaultValues(); 
var array10 = array.splice(-3, 4, Infinity, "university");
print(array.length == 3);
print(array[0] == 54);
print(array[1] == Infinity);
print(array[2] == "university");
print(array10.length == 3);
print(array10[0] == undefined);
print(array10[1] == -127);
print(array10[2] == "sunshine");

var array = [];
array[4294967294] = "foo";
var result = array.splice(4294967294, 1, "x")
print(result.length === 1)
print(result[0] === "foo")
print(array[4294967294] === "x")

array[0] = "bar";
var result = array.splice(-4294967295, 1, "y");
print(result.length === 1)
print(result[0] === "bar")
print(array[0] === "y")

var arr = [1,2];
Array.prototype[0] = 3;
var newArr = arr.splice(0, 1);
delete Array.prototype[0];
print(newArr.hasOwnProperty("0"));
print(newArr[0] === 1);


var obj = {splice : Array.prototype.splice};
Object.defineProperty(obj, 'length', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.splice(1, 2, "item1", "item2");
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = {length : 1, splice : Array.prototype.splice};
Object.defineProperty(obj, '0', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.splice(0, 1, "item1", "item2");
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


try {
  var o = {};
  Object.defineProperty(o, 'toString', { 'get' : function() { throw new ReferenceError("1"); } });
  [1, 2].splice(o);
  print(false);
} catch (e) {
  print(e instanceof ReferenceError);
  print(e.message == "1");
}


try {
  var o = {};
  Object.defineProperty(o, 'toString', { 'get' : function() { throw new ReferenceError("2"); } });
  [1, 2].splice(1, o);
  print(false);
} catch (e) {
  print(e instanceof ReferenceError);
  print(e.message == "2");
}


try {
  var a = [1, 5, 6, 7, 8, 5];
  Object.defineProperty(a, '0', { 'get' : function() { throw new ReferenceError("foo0"); } });
  Array.prototype.splice.call(a, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3);
  print(false);
} catch (e) {
  print(e instanceof ReferenceError);
  print(e.message == "foo0");
}


function f0() { throw new TypeError("4"); };

try {
  obj = {get: f0, valueOf : f0, toString: f0};
  arr = [1, 2, obj, 4, 5];
  Object.defineProperty(arr, '4', { 'get' : f0 });
  arr.splice(1, 3, obj);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
  print(e.message == "4");
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
  print(false);
} catch (e) {
  print(e instanceof TypeError);
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
  print(e instanceof TypeError);
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
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


function f3() { throw new TypeError("6");};

try {
  arr = [1, 2, 4, 5];
  Object.defineProperty(arr, '4',{ 'get' : f3 });
  arr.splice(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
  print(e.message == "6");
}


function f4() { delete arr[23]; };

try {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  delete arr[23];
  Object.defineProperty(arr, '23', { 'get' : f4 });
  arr.splice(1, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
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
  print(false);
} catch (e) {
  print(e instanceof TypeError);
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
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


try {
  arr = [];
  Object.defineProperty(arr, 'length', { value : 999, writable: false });
  arr.splice(1, 2, 4, 5);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}
