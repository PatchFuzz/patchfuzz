


var o = {x: 1};
o.y = 2;
Object.setPrototypeOf(o, null);
delete o.y;
assertEq(Object.getPrototypeOf(o), null);
