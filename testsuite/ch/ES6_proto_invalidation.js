






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


var a1 = new String();
a1[1] = "search1";
a1[2] = "search2";
a1; 
a1.__proto__ = [];
a1; 
a1.__proto__ = c;
a1; 


a1.__proto__ = [];
a1; 
WScript.Echo('PASSED');