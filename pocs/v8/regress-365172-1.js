var b1 = {d: 1}; var b2 = {d: 2};
var f1 = {x: 1}; var f2 = {x: 2};
f1.b = b1;
f2.x = {};
b2.d = 4.2;
f2.b = b2;
var x = f1.x;
