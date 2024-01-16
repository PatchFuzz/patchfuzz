






var arr = new Array(1);
var newarr = arr.splice(1, 2);

var obj = { };
obj.length = 2;
obj.splice = Array.prototype.splice;
Object.prototype.splice = Array.prototype.splice;

WScript.Echo("ok");