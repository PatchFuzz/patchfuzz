

function f() {
    return [[], [], [], []];
}

function setelem(obj, key, val) {
    obj[key] = val;
}


setelem([], 0, "hi");
setelem([], 0, "hi");


var arrays = f();


Object.defineProperty(Object.prototype, "1", { set: function (v) { this.kettle = v; } });

var k = arrays[0];
setelem(k, 1, 13);
assertEq(k.kettle, 13);
assertEq(k.hasOwnProperty("1"), false);

Object.defineProperty(Array.prototype, "2", { set: function (v) { this.pot = v; } });
k = arrays[1];
setelem(k, 2, "yam");
assertEq(k.pot, "yam");

gc();


setelem([], 0, "hi");
setelem([], 0, "hi");

