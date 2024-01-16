


var truncDITests = [
    [0.49999999999999997, 0],
    [0.5, 0],
    [1.0, 1],
    [1.5, 1],
    [792.8, 792],
    [-1.0001, -1],
    [-3.14, -3],
    [2137483649.5, 2137483649],
    [2137483648.5, 2137483648],
    [2137483647.1, 2137483647],
    [-2147483647.8, -2147483647],
];

var truncDITests_bailout = [
    ...truncDITests,

    
    [-2147483648.8, -2147483648],
];

var truncDTests = [
    [-0, -0],
    [0.49999999999999997, 0],
    [0.5, 0],
    [1.0, 1],
    [1.5, 1],
    [792.8, 792],
    [-0.1, -0],
    [-1.0001, -1],
    [-3.14, -3],
    [2137483649.5, 2137483649],
    [2137483648.5, 2137483648],
    [2137483647.1, 2137483647],
    [900000000000, 900000000000],
    [-0, -0],
    [-Infinity, -Infinity],
    [Infinity, Infinity],
    [NaN, NaN],
    [-2147483648.8, -2147483648],
    [-2147483649.8, -2147483649],
];

var truncITests = [
    [0, 0],
    [4, 4],
    [-1, -1],
    [-7, -7],
    [2147483647, 2147483647],
];


function truncDI(x) { return Math.trunc(x); }
function truncDI_bailout(x) { return Math.trunc(x); }
function truncD(x) { return Math.trunc(x); }
function truncI(x) { return Math.trunc(x); }

function test() {
    
    with ({}) {}

    for (var i = 0; i < truncDITests.length; i++)
        assertEq(truncDI(truncDITests[i][0]), truncDITests[i][1]);
    for (var i = 0; i < truncDITests_bailout.length; i++)
        assertEq(truncDI_bailout(truncDITests_bailout[i][0]), truncDITests_bailout[i][1]);
    for (var i = 0; i < truncDTests.length; i++)
        assertEq(truncD(truncDTests[i][0]), truncDTests[i][1]);
    for (var i = 0; i < truncITests.length; i++)
        assertEq(truncI(truncITests[i][0]), truncITests[i][1]);
}

for (var i = 0; i < 40; i++)
    test();
