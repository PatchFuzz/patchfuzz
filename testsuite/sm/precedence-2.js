

var f, g;
g = (f, h => h + 1);  
assertEq(g.length, 1);
assertEq(g(37), 38);
