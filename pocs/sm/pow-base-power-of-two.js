;

function test(x, y, z) {
    function pow(x, y) { return `Math.pow(${x}, ${y})` };
    function exp(x, y) { return `((${x}) ** ${y})` };

    function make(fn, x, y, z) {
        return Function(`
            
            
            
            var ys = [${y}, ${y}];
            var zs = [${z}, ${z}];
            for (var i = 0; i < 200; ++i) {
                print(${fn(x, "ys[i & 1]")}, zs[i & 1]);
            }
        `);
    }

    function double(v) {
        
        return `numberToDouble(${v})`;
    }

    function addTests(fn) {
        tests.push(make(fn, x, y, z));
        tests.push(make(fn, x, double(y), z));
        tests.push(make(fn, double(x), y, z));
        tests.push(make(fn, double(x), double(y), z));
    }

    var tests = [];
    addTests(pow);
    addTests(exp);

    for (var i = 0; i < tests.length; ++i) {
        for (var j = 0; j < 2; ++j) {
            tests[i]();
        }
    }
}

function* range(a, b, fn) {
    for (var i = a; i <= b; ++i) {
        yield fn(i);
    }
}



var values = [
    ...range(1, 10, i => 2 ** i),
    1,
    0,
    ...range(1, 4, i => -(2 ** i)),
];

for (var x of values) {
    test(x, 0, 1);
    test(x, 1, x);
    test(x, 2, x * x);

    
    if (Math.abs(x) > 1) {
        test(x, -1076, 0);
    }

    
    if (x > 1) {
        test(x, -1075, 0);
    }
}
