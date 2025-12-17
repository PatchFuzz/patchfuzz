;

function testMapped(a) {
    print(arguments[0], 1);

    Object.defineProperty(arguments, 0, {value: 23, writable: true, configurable: true});
    print(arguments[0], 23);
    print(a, 23);

    a = 12;
    print(a, 12);
    print(arguments[0], 12);

    Object.defineProperty(arguments, 0, {value: 9, writable: false, configurable: false});
    print(arguments[0], 9);
    print(a, 9);

    a = 4;
    print(arguments[0], 9);
    print(a, 4);
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
    print(JSON.stringify(Object.getOwnPropertyDescriptor(arguments, 0)),
             '{"value":8,"writable":true,"enumerable":true,"configurable":true}');
    print(x, 8);

    
    Object.defineProperty(arguments, 0, {writable:true,
                                         configurable:false,
                                         value: 6});
    print(JSON.stringify(Object.getOwnPropertyDescriptor(arguments, 0)),
             '{"value":6,"writable":true,"enumerable":true,"configurable":false}');
    print(x, 6);

    
    print(() => Object.defineProperty(arguments, 0, {writable:true,
                                                                      configurable:false,
                                                                      enumerable:false,
                                                                      value: 6}),
                           TypeError);

    
    print(() => Object.defineProperty(arguments, 0, {writable:true,
                                                                      configurable:true,
                                                                      value: 6}),
                           TypeError);

    
    Object.defineProperty(arguments, 0, {writable:false,
                                         enumerable:true,
                                         configurable:false,
                                         value: 3});
    print(x, 3);

    
    x = 5;
    print(arguments[0], 3);

    
    print(() => Object.defineProperty(arguments, 0, {writable:true,
                                                                      enumerable:true,
                                                                      configurable:false,
                                                                      value: 5}),
                           TypeError);
    print(x, 5);
}
for (var i = 0; i < 5; i++) {
    testAttributes(i);
}
