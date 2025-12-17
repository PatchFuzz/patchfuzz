function setelem(o, i, v) {
    o[i] = v;
}

var arr = new Array();
var obj = {};

setelem(arr, "prop0", 2);
setelem(arr, 0, 2); 
setelem(arr, 1, 1); 

setelem(arr, 0, 0); 
setelem(arr, 2, 2); 
setelem(arr, 4, 4); 
setelem(arr, "prop0", 0);
setelem(arr, "prop1", 1);

setelem(obj, "prop0", 2);
setelem(obj, 0, 2);
setelem(obj, 1, 1);

setelem(obj, 0, 0);
setelem(obj, 2, 2);
setelem(obj, 4, 4);
setelem(obj, "prop0", 0);
setelem(obj, "prop1", 1);

print(arr.prop0, 0);
print(arr.prop1, 1);
print(arr[0], 0);
print(arr[1], 1);
print(arr[2], 2);
print(arr[4], 4);

print(obj.prop0, 0);
print(obj.prop1, 1);
print(obj[0], 0);
print(obj[1], 1);
print(obj[2], 2);
print(obj[4], 4);
