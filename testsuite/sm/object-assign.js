function test() {
    var from, to;

    
    from = {x: 1, y: 2};
    to = {set x(v) { from.y = 5; }};
    Object.assign(to, from);
    assertEq(to.y, 5);

    
    from = {x: 1, y: 2};
    to = {set x(v) { Object.defineProperty(from, "y", {get: () => 4}); }};
    Object.assign(to, from);
    assertEq(to.y, 4);

    
    from = {x: 1, y: 2};
    to = {set x(v) { Object.defineProperty(from, "y", {value: 2,
						       enumerable: false,
						       configurable: true,
						       writable: true}); }};
    Object.assign(to, from);
    assertEq("y" in to, false);
    to = {};
    Object.assign(to, from);
    assertEq("y" in to, false);

    
    from = {x: 1, toString: 2};
    to = {set x(v) { delete from.toString; }};
    Object.assign(to, from);
    assertEq(to.hasOwnProperty("toString"), false);

    from = {toString: 2, x: 1};
    to = {set x(v) { delete from.toString; }};
    Object.assign(to, from);
    assertEq(to.toString, 2);

    from = {x: 1, toString: 2, y: 3};
    to = {set x(v) { delete from.toString; }};
    Object.assign(to, from);
    assertEq(to.hasOwnProperty("toString"), false);
    assertEq(to.y, 3);

    
    from = {x: 1, y: 2};
    to = {set x(v) { from.z = 3; }};
    Object.assign(to, from);
    assertEq("z" in to, false);

    
    var c = 7;
    from = {x: 1, get y() { return ++c; }};
    to = {};
    Object.assign(to, from);
    Object.assign(to, from, from);
    assertEq(to.y, 10);

    
    from = {x: 1, y: 2};
    to = {x: 4};
    Object.freeze(to);
    var ex;
    try {
	Object.assign(to, from);
    } catch (e) {
	ex = e;
    }
    assertEq(ex instanceof TypeError, true);
    assertEq(to.x, 4);

    
    from = {x: 1, y: 2, z: 3};
    to = {};
    Object.defineProperty(to, "y", {value: 9, writable: false});
    ex = null;
    try {
	Object.assign(to, from);
    } catch(e) {
	ex = e;
    }
    assertEq(ex instanceof TypeError, true);
    assertEq(to.x, 1);
    assertEq(to.y, 9);
    assertEq(to.z, undefined);

    
    from = [1, 2, 3];
    to = {};
    Object.assign(to, from);
    assertEq(to[2], 3);
    assertEq("length" in to, false);

    
    from = {x: 1, 1234567: 2,  1234560: 3,[Symbol.iterator]: 5, z: 3};
    to = {};
    Object.assign(to, from);
    assertEq(to[1234567], 2);
    assertEq(Object.keys(to).toString(), "1234560,1234567,x,z");
    assertEq(to[Symbol.iterator], 5);

    
    from = {x: 1, [Symbol.iterator]: 2, y: 3};
    to = {set y(v) { throw 9; }};
    ex = null;
    try {
	Object.assign(to, from);
    } catch (e) {
	ex = e;
    }
    assertEq(ex, 9);
    assertEq(to.x, 1);
    assertEq(to.hasOwnProperty(Symbol.iterator), false);

    
    from = new Int32Array([1, 2, 3]);
    to = {};
    Object.assign(to, from);
    assertEq(to[1], 2);

    
    from = "foo";
    to = {};
    Object.assign(to, from);
    assertEq(to[0], "f");

    
    from = new String("bar");
    to = {};
    Object.assign(to, from);
    assertEq(to[2], "r");
}
test();
test();
test();
