function test() {
    var from, to;

    
    from = {x: 1, y: 2};
    to = {...from};
    assertEq(to.y, 2);
    to = {...from, ...from};
    assertEq(to.y, 2);

    
    var c = 7;
    from = {x: 1, get y() { return ++c; }};
    to = {...from};
    assertEq(to.y, 8);
    to = {...from, ...from};
    assertEq(to.y, 10);

    
    from = [1, 2, 3];
    to = {...from};
    assertEq(to[2], 3);
    assertEq("length" in to, false);

    
    from = {x: 1, 1234567: 2, 1234560: 3, [Symbol.iterator]: 5, z: 3};
    to = {...from};
    assertEq(to[1234567], 2);
    assertEq(Object.keys(to).toString(), "1234560,1234567,x,z");
    assertEq(to[Symbol.iterator], 5);

    
    from = new Int32Array([1, 2, 3]);
    to = {...from};
    assertEq(to[1], 2);

    
    from = "foo";
    to = {...from};
    assertEq(to[0], "f");

    
    from = new String("bar");
    to = {...from};
    assertEq(to[2], "r");
}
test();
test();
test();
