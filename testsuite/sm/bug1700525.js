
var o = {x: 1, y: 2, z: 3};
delete o.x;


var val = 0;
Object.defineProperty(o, "y", {get: () => val, set: v => { val = v; }});


Object.assign(o, {x: 3, y: 4, z: 5});
assertEq(val, 4);
assertEq(o.x, 3);
assertEq(o.y, 4);
assertEq(o.z, 5);
