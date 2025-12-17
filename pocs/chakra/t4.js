var arr = new Array(10);
var newarr = arr.splice(2147483648, 2)   

var obj = { };
obj.splice = Array.prototype.splice;
Object.prototype.splice = Array.prototype.splice;

print("ok");