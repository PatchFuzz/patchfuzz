load(libdir + "asserts.js");

function testMapped(a) {
    assertEq(arguments[0], 1);

    Object.defineProperty(arguments, 0, {value: 23, writable: true, configurable: true});
    assertEq(arguments[0], 23);
    assertEq(a, 23);

    a = 12;
    assertEq(a, 12);
    assertEq(arguments[0], 12);

    Object.defineProperty(arguments, 0, {value: 9, writable: false, configurable: false});
    assertEq(arguments[0], 9);
    assertEq(a, 9);

    a = 4;
    assertEq(arguments[0], 9);
    assertEq(a, 4);
}
for (var i = 0; i < 5; i++) {
    testMapped(1);
}

function testAttributes(x) {
    Object.defineProperty(arguments, 0, {enumerable:true,
                                         writable:true,
                                         configurable:true,
                                         value: 4});

    
    Object.defineProperty(arguments, 0, {writable:true,
                                         value: 8});
    assertEq(JSON.stringify(Object.getOwnPropertyDescriptor(arguments, 0)),
             '{"value":8,"writable":true,"enumerable":true,"configurable":true}');
    assertEq(x, 8);

    
    Object.defineProperty(arguments, 0, {writable:true,
                                         configurable:false,
                                         value: 6});
    assertEq(JSON.stringify(Object.getOwnPropertyDescriptor(arguments, 0)),
             '{"value":6,"writable":true,"enumerable":true,"configurable":false}');
    assertEq(x, 6);

    
    assertThrowsInstanceOf(() => Object.defineProperty(arguments, 0, {writable:true,
                                                                      configurable:false,
                                                                      enumerable:false,
                                                                      value: 6}),
                           TypeError);

    
    assertThrowsInstanceOf(() => Object.defineProperty(arguments, 0, {writable:true,
                                                                      configurable:true,
                                                                      value: 6}),
                           TypeError);

    
    Object.defineProperty(arguments, 0, {writable:false,
                                         enumerable:true,
                                         configurable:false,
                                         value: 3});
    assertEq(x, 3);

    
    x = 5;
    assertEq(arguments[0], 3);

    
    assertThrowsInstanceOf(() => Object.defineProperty(arguments, 0, {writable:true,
                                                                      enumerable:true,
                                                                      configurable:false,
                                                                      value: 5}),
                           TypeError);
    assertEq(x, 5);
}
for (var i = 0; i < 5; i++) {
    testAttributes(i);
}
