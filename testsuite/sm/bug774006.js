


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

assertEq(arr.prop0, 0);
assertEq(arr.prop1, 1);
assertEq(arr[0], 0);
assertEq(arr[1], 1);
assertEq(arr[2], 2);
assertEq(arr[4], 4);

assertEq(obj.prop0, 0);
assertEq(obj.prop1, 1);
assertEq(obj[0], 0);
assertEq(obj[1], 1);
assertEq(obj[2], 2);
assertEq(obj[4], 4);
