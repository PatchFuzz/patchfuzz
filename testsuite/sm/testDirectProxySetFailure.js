

load(libdir + "asserts.js");

var obj = {x: 1};
var p = new Proxy(obj, {
    set(target, key, value, receiver) { return false; }
});


assertEq(p.x = 2, 2);
assertEq(obj.x, 1);


assertThrowsInstanceOf(() => { "use strict"; p.x = 2; }, TypeError);
assertEq(obj.x, 1);


assertThrowsInstanceOf(() => { "use strict"; p.x = 1; }, TypeError);
assertEq(obj.x, 1);


assertThrowsInstanceOf(() => { "use strict"; p.z = 1; }, TypeError);
assertEq("z" in obj, false);


var arr = ["not", "already", "in", "order"];
var p2 = new Proxy(arr, {
    set(target, key, value, receiver) { return false; }
});
assertThrowsInstanceOf(() => p2.sort(), TypeError);
assertDeepEq(arr, ["not", "already", "in", "order"]);
