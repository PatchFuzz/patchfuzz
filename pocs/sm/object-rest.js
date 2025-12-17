function test() {
    var from, to;

    
    from = {x: 1, y: 2};
    ({...to} = from);
    print(to.y, 2);

    var z;
    from = {x: 1, y: 2};
    ({x: z, ...to} = from);
    print(z, 1);
    print(to.y, 2);

    
    var c = 7;
    from = {x: 1, get y() { return ++c; }};
    ({...to} = from);
    print(c, 8);
    print(to.y, 8);

    from = {x: 1, get y() { return ++c; }};
    ({y: z, ...to} = from);
    print(c, 9);
    print(z, 9);
    print(to.y, undefined);

    
    from = [1, 2, 3];
    ({...to} = from);
    print(to[2], 3);
    print("length" in to, false);

    from = [1, 2, 3];
    ({2: z, ...to} = from);
    print(z, 3);
    print(to[2], undefined);
    print(to[0], 1);
    print("length" in to, false);

    
    from = {x: 1, 1234567: 2, 1234560: 3, [Symbol.iterator]: 5, z: 3};
    ({...to} = from);
    print(to[1234567], 2);
    print(Object.keys(to).toString(), "1234560,1234567,x,z");
    print(to[Symbol.iterator], 5);

    from = {x: 1, 1234567: 2, 1234560: 3, [Symbol.iterator]: 5, z: 3};
    ({[Symbol.iterator]: z, ...to} = from);
    print(to[1234567], 2);
    print(Object.keys(to).toString(), "1234560,1234567,x,z");
    print(to[Symbol.iterator], undefined);
    print(z, 5);

    
    from = new Int32Array([1, 2, 3]);
    ({...to} = from);
    print(to[1], 2);

    from = new Int32Array([1, 2, 3]);
    ({1: z, ...to} = from);
    print(z, 2);
    print(to[1], undefined);
    print(to[2], 3);

    
    from = "foo";
    ({...to} = from);
    print(to[0], "f");

    from = "foo";
    ({0: z, ...to} = from);
    print(z, "f");
    print(to[0], undefined);
    print(to[1], "o");

    
    from = new String("bar");
    ({...to} = from);
    print(to[2], "r");

    from = new String("bar");
    ({1: z, ...to} = from);
    print(z, "a");
    print(to[1], undefined);
    print(to[2], "r");
}
test();
test();
test();
