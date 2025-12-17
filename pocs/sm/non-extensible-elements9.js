function testNonExtensibleStoreFallibleT() {
    
    var x = [8, 0];

    
    Object.preventExtensions(x);

    
    x.length = 1;

    
    
    x[1] = 4;

    print(x.length, 1);
    print(x[0], 8);
}

for (var i = 0; i < 15; ++i)
    testNonExtensibleStoreFallibleT();


function testNonExtensibleStoreFallibleV(i) {
    
    var x = [8, ""];

    
    Object.preventExtensions(x);

    
    x.length = 1;

    
    
    x[1] = [true, 1][i & 1];

    print(x.length, 1);
    print(x[0], 8);
}

for (var i = 0; i < 15; ++i)
    testNonExtensibleStoreFallibleV(i);

function testForInIterationNonExtensibleStoreFallibleT() {
    
    var x = [8, 0];

    
    Object.preventExtensions(x);

    
    
    for (var k in x) {
        
        x.length = 1;
    }

    
    
    x[1] = 4;

    print(x.length, 1);
    print(x[0], 8);
}

for (var i = 0; i < 15; ++i)
    testForInIterationNonExtensibleStoreFallibleT();


function testForInIterationNonExtensibleStoreFallibleV(i) {
    
    var x = [8, ""];

    
    Object.preventExtensions(x);

    
    
    for (var k in x) {
        
        x.length = 1;
        break;
    }

    
    
    x[1] = [true, 1][i & 1];

    print(x.length, 1);
    print(x[0], 8);
}

for (var i = 0; i < 15; ++i)
    testForInIterationNonExtensibleStoreFallibleV(i);

function testNonExtensibleArrayPop() {
    
    var x = [8, 0];

    
    Object.preventExtensions(x);

    
    x.pop();

    
    
    x[1] = 4;

    print(x.length, 1);
    print(x[0], 8);
}

for (var i = 0; i < 15; ++i)
    testNonExtensibleArrayPop();

function testNonExtensibleArrayPopNonWritable() {
    
    var x = [8, 0];

    
    Object.preventExtensions(x);

    
    Object.defineProperty(x, "length", {writable: false});

    
    
    try {
        x.pop();
    } catch {}

    
    
    for (var i = 0; i < 100; ++i)
        x[1] = 4;

    print(x.length, 2);
    print(x[0], 8);
    print(x[1], undefined);
    print(1 in x, false);
}

for (var i = 0; i < 15; ++i)
    testNonExtensibleArrayPopNonWritable();

function testNonExtensibleArrayShift() {
    
    var x = [8, 0];

    
    Object.preventExtensions(x);

    
    x.shift();

    
    
    x[1] = 4;

    print(x.length, 1);
    print(x[0], 0);
}

for (var i = 0; i < 15; ++i)
    testNonExtensibleArrayShift();

function testNonExtensibleArraySplice() {
    
    var x = [8, 0];

    
    Object.preventExtensions(x);

    
    x.splice(1, 1);

    
    
    x[1] = 4;

    print(x.length, 1);
    print(x[0], 8);
}

for (var i = 0; i < 15; ++i)
    testNonExtensibleArraySplice();
