

function B() {}
B.prototype.x = 1;
var d = new B;

var names = ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'x'];
for (var i = 0; i < names.length; i++) {
    x = d.x;  
    d[names[i]] = 2;  
    y = d.x;  
}
assertEq(y, 2);  
