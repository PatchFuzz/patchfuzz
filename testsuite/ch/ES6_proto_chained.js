






var a = {
    x : 2
};
var b = {
    y : 2
};
b.__proto__ = a;

var c = [];
var d = new Date();
d.__proto__ = b;
a.__proto__ = [];
c.__proto__ = d;
c; 
WScript.Echo('PASSED');