







var x = 4;

Object.defineProperty(this, "x", { writable: false });

x = 3;
WScript.Echo(x);
var x = 5;
WScript.Echo(x);
