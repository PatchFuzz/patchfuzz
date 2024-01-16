

load(libdir + "asserts.js");

var obj = {x: 1, y: 2};
var nope = false;
var p = new Proxy(obj, {
    defineProperty(target, key, desc) { return nope; }
});


print(1);
assertThrowsInstanceOf(() => Object.defineProperty(p, "z", {value: 3}), TypeError);
assertEq("z" in obj, false);
assertThrowsInstanceOf(() => Object.defineProperty(p, "x", {value: 0}), TypeError);



print(2);
assertEq(p.z = 3, 3);
assertThrowsInstanceOf(() => { "use strict"; p.z = 3; }, TypeError);


print(3);
for (nope of [0, -0, NaN, ""])
    assertThrowsInstanceOf(() => { "use strict"; p.z = 3; }, TypeError);
