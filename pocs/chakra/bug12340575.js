Object.defineProperty(Array.prototype, 2, {get: function () { } });

var arr = {};
arr[0] = {};
arr.length = 10;
var protoObj = {};
Object.defineProperty(protoObj, 10, {});
arr.__proto__ = protoObj;

Array.prototype.sort.call(arr);
print('Pass');
