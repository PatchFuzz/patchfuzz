var a = 10;
var global = (function () { return this; }) ();
var keys = Object.keys(global);
print(keys.indexOf("a") > 0);
