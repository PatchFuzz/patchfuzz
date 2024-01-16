


function test(x, y, z) {
    function pow(x, y) { return `Math.pow(${x}, ${y})` };
    function exp(x, y) { return `((${x}) ** ${y})` };

    function make(fn, x, y, z) {
        return Function(`
            
            
            
            var xs = [${x}, ${x}];
            var zs = [${z}, ${z}];
            for (var i = 0; i < 1000; ++i) {
                assertEq(${fn("xs[i & 1]", y)}, zs[i & 1]);
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




test( 1, -0.5, 1);
test(16, -0.5, 0.25);


test(16, 0.5, 4);
test( 2, 0.5, Math.SQRT2);


test(5,   1, 5);
test(0.5, 1, 0.5);


test(5,   2, 25);
test(0.5, 2, 0.25);


test(5,   3, 125);
test(0.5, 3, 0.125);


test(5,   4, 625);
test(0.5, 4, 0.0625);
