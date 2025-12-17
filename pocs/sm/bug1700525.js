var o = {x: 1, y: 2, z: 3};
delete o.x;


var val = 0;
Object.defineProperty(o, "y", {get: () => val, set: v => { val = v; }});


Object.assign(o, {x: 3, y: 4, z: 5});
print(val, 4);
print(o.x, 3);
print(o.y, 4);
print(o.z, 5);
