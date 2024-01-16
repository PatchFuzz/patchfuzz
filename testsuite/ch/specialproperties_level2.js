





var a = new Object();
a.__proto__ = [1,2];

var b = [,1,2,3,]; 
b.__proto__ = new Function();

var c = function(a,b){
    this.length = 100;
}
c.prototype.length = 200;
d = new c();
c;
c; 
c;
a;
a; 
a;
WScript.Echo('Pass');

