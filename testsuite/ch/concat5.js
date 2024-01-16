






var a = 1;
var b = 2;
var obj = {toString: function(){ a=3; return "Hello World";}};
a = b;
Object.prototype.concat = String.prototype.concat;
var f = obj.concat("abc");
WScript.Echo (a); 