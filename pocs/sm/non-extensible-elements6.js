;

function testNonExtensible() {
    var a = [1, 2, 3, , 5];
    Object.preventExtensions(a);

    
    Object.defineProperty(a, 1, {value:7, enumerable: true, configurable: true, writable: true});
    print(JSON.stringify(Object.getOwnPropertyDescriptor(a, 1)),
            `{"value":7,"writable":true,"enumerable":true,"configurable":true}`);

    
    Object.defineProperty(a, 1, {value:9, enumerable: true, configurable: true, writable: false});
    print(JSON.stringify(Object.getOwnPropertyDescriptor(a, 1)),
            `{"value":9,"writable":false,"enumerable":true,"configurable":true}`);
    Object.defineProperty(a, 0, {value:4, enumerable: true, configurable: false, writable: true});
    print(JSON.stringify(Object.getOwnPropertyDescriptor(a, 0)),
             `{"value":4,"writable":true,"enumerable":true,"configurable":false}`);
    Object.defineProperty(a, 2, {value:3, enumerable: false, configurable: true, writable: true});
    print(JSON.stringify(Object.getOwnPropertyDescriptor(a, 2)),
             `{"value":3,"writable":true,"enumerable":false,"configurable":true}`);

    
    Object.defineProperty(a, 4, {get:() => -2, enumerable: true, configurable: true});

    
    print(() => Object.defineProperty(a, 3,
                                                       {value:4, enumerable: true,
                                                        configurable: true,
                                                        writable: true}),
                           TypeError);
    print(() => Object.defineProperty(a, 10,
                                                       {value:4,
                                                        enumerable: true,
                                                        configurable: true,
                                                        writable: true}),
                           TypeError);

    print(a.toString(), "4,9,3,,-2");
}
for (var i = 0; i < 15; i++)
    testNonExtensible();

function testSealed() {
    var a = [1, 2, 3, , 5];
    Object.seal(a);

    
    Object.defineProperty(a, 1, {value:7, enumerable: true, configurable: false, writable: true});
    print(JSON.stringify(Object.getOwnPropertyDescriptor(a, 1)),
             `{"value":7,"writable":true,"enumerable":true,"configurable":false}`);

    
    Object.defineProperty(a, 0, {value:4, enumerable: true, configurable: false, writable: false});

    
    print(() => Object.defineProperty(a, 2,
                                                       {value:7,
                                                        enumerable: true,
                                                        configurable: true,
                                                        writable: true}),
                           TypeError);
    print(() => Object.defineProperty(a, 2,
                                                       {value:7,
                                                        enumerable: false,
                                                        configurable: false,
                                                        writable: true}),
                           TypeError);

    
    print(() => Object.defineProperty(a, 4, {get:() => -2,
                                                              enumerable: true,
                                                              configurable: true}),
                           TypeError);

    
    print(() => Object.defineProperty(a, 3,
                                                       {value:4, enumerable: true,
                                                        configurable: true,
                                                        writable: true}),
                           TypeError);
    print(() => Object.defineProperty(a, 10,
                                                       {value:4,
                                                        enumerable: true,
                                                        configurable: true,
                                                        writable: true}),
                           TypeError);

    print(a.toString(), "4,7,3,,5");
}
for (var i = 0; i < 15; i++)
    testSealed();

function testFrozen() {
    var a = [1, 2, 3, , 5];
    Object.freeze(a);

    
    Object.defineProperty(a, 0, {value:1, enumerable: true, configurable: false, writable: false});

    
    print(() => Object.defineProperty(a, 1,
                                                       {value:7,
                                                        enumerable: true,
                                                        configurable: false,
                                                        writable: false}),
                           TypeError);

    
    print(() => Object.defineProperty(a, 2,
                                                       {value:3,
                                                        enumerable: true,
                                                        configurable: true,
                                                        writable: false}),
                           TypeError);
    print(() => Object.defineProperty(a, 2,
                                                       {value:3,
                                                        enumerable: false,
                                                        configurable: false,
                                                        writable: false}),
                           TypeError);
    
    print(() => Object.defineProperty(a, 4, {get:() => -2,
                                                              enumerable: true,
                                                              configurable: true}),
                           TypeError);

    
    print(() => Object.defineProperty(a, 3,
                                                       {value:4, enumerable: true,
                                                        configurable: true,
                                                        writable: true}),
                           TypeError);
    print(() => Object.defineProperty(a, 10,
                                                       {value:4,
                                                        enumerable: true,
                                                        configurable: true,
                                                        writable: true}),
                           TypeError);

    print(a.toString(), "1,2,3,,5");
}
for (var i = 0; i < 15; i++)
    testFrozen();
