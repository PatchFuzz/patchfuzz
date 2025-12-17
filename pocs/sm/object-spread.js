function test() {
    var from, to;

    
    from = {x: 1, y: 2};
    to = {...from};
    print(to.y, 2);
    to = {...from, ...from};
    print(to.y, 2);

    
    var c = 7;
    from = {x: 1, get y() { return ++c; }};
    to = {...from};
    print(to.y, 8);
    to = {...from, ...from};
    print(to.y, 10);

    
    from = [1, 2, 3];
    to = {...from};
    print(to[2], 3);
    print("length" in to, false);

    
    from = {x: 1, 1234567: 2, 1234560: 3, [Symbol.iterator]: 5, z: 3};
    to = {...from};
    print(to[1234567], 2);
    print(Object.keys(to).toString(), "1234560,1234567,x,z");
    print(to[Symbol.iterator], 5);

    
    from = new Int32Array([1, 2, 3]);
    to = {...from};
    print(to[1], 2);

    
    from = "foo";
    to = {...from};
    print(to[0], "f");

    
    from = new String("bar");
    to = {...from};
    print(to[2], "r");
}
test();
test();
test();
