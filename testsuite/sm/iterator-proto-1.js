


load(libdir + "iteration.js");


var iterProto = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));

function test(obj0, obj1) {
    var iter0 = obj0[Symbol.iterator](), iter1 = obj1[Symbol.iterator]();
    var proto = Object.getPrototypeOf(iter0);
    assertEq(Object.getPrototypeOf(iter1), proto);
    assertEq(Object.getPrototypeOf(proto), iterProto);
}

test([], [1]);
test(new Map(), new Map([[1, 1]]));
test(new Set(), new Set([1]));
