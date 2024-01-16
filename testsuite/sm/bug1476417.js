function f(x) {
    var y, z;

    arguments; 
    Math; 
    z = x + 1; 
    x = z; 
    y = 2 * x; 

    return [x, y];
}

var x = [0, 0, 0x3FFFFFFF];

for (var j = 0; j < 3; ++j) {
    var value = x[j];
    var expected = [value + 1, (value + 1) * 2];
    var actual = f(value);

    assertEq(actual[0], expected[0]);
    assertEq(actual[1], expected[1]);
}
