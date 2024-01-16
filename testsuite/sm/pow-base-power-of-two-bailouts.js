




function test(x) {
    function pow(x, y) { return `Math.pow(${x}, ${y})` };
    function exp(x, y) { return `((${x}) ** ${y})` };

    function make(fn) {
        return Function("y, z", `
            
            
            
            var ys = [y, y];
            var zs = [z, z];
            for (var i = 0; i < 1000; ++i) {
                assertEq(${fn(x, "ys[i & 1]")}, zs[i & 1]);
            }
        `);
    }

    function double(v) {
        
        return numberToDouble(v);
    }

    
    var limit = Math.ceil(Math.log2(2 ** 31) / Math.log2(x));
    assertEq(Math.pow(x, limit - 1) < 2 ** 31, true);
    assertEq(Math.pow(x, limit) >= 2 ** 31, true);

    function* args(first, last) {
        
        for (var i = 0; i < 3; ++i) {
            yield first;
        }

        
        yield last;
    }

    
    for (var fn of [make(pow), make(exp)]) {
        for (var y of args(limit - 1, limit)) {
            
            var z = double(Math.pow(x, y));
            fn(y, z);
        }
    }

    
    for (var fn of [make(pow), make(exp)]) {
        for (var y of args(0, -1)) {
            
            var z = double(Math.pow(x, y));
            fn(y, z);
        }
    }

    
    var negLimit = -Math.floor(1074 / Math.log2(x));

    
    for (var fn of [make(pow), make(exp)]) {
        for (var y of args(limit - 1, limit)) {
            
            var z = double(Math.pow(x, y));
            fn(y, z);
        }
    }
}

function* range(a, b, fn) {
    for (var i = a; i <= b; ++i) {
        yield fn(i);
    }
}




for (var x of range(1, 10, i => 2 ** i)) {
    test(x);
}
