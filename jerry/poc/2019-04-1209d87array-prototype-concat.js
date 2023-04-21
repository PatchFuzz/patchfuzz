













var array = ["foo", [], Infinity, 4]
var new_arr = array.concat();

print(new_arr.length === array.length)
for (i = 0; i < array.length; i++) {
  print(array[i] === new_arr[i]);
}

var obj = { concat : Array.prototype.concat };
var arr1 = ["Apple", 6, "Peach"];
var arr2 = [obj, "Cherry", "Grape"];

var new_array = obj.concat(arr1);
print(new_array.length === 4);
print(new_array[0] === obj);
print(new_array[1] === "Apple");
print(new_array[2] === 6);
print(new_array[3] === "Peach");

var new_array = arr1.concat(arr2, obj, 1);

print(new_array.length === 8);
print(new_array[0] === "Apple");
print(new_array[1] === 6);
print(new_array[2] === "Peach");
print(new_array[3] === obj);
print(new_array[4] === "Cherry");
print(new_array[5] === "Grape");
print(new_array[6] === obj);
print(new_array[7] === 1);

var arr1 = [1,2];
var arr2 = [4,5,6,7,8];
var arr3 = [,,9,10];
var arr4 = [];
var expected = [1,2,4,5,6,7,8,,,9,10];

var result = arr1.concat(arr2, arr3, arr4);

print(result.length === expected.length)
for (i = 0; i < result.length; i++) {
  print(result[i] === expected[i]);
}

var arr1 = [];
arr1.length = 2;
var arr2 = [];
arr2.length = 3;
print(arr1.concat(arr2).length === arr1.length + arr2.length);


var arr = []
Object.defineProperty(arr, '0', { 'get' : function () {throw new ReferenceError ("foo"); } });
arr.length = 1;

try {
  arr.concat();
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


arr1 = [];
arr2 = [];
arr3 = [];
Object.defineProperty(arr2, '0', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  arr1.concat(arr2, arr3);
  print(false);
} catch (e) {
  print(e instanceof ReferenceError);
}
