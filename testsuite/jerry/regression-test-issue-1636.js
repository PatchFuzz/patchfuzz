













assert(Number("Infinity") == Infinity);
assert(isNaN(Number("infinity")));
assert(isNaN(Number("InfinitY")));
assert(isNaN(Number("e")));
assert(isNaN(Number("e3")));
assert(Number("1e2") == 100);
assert(isNaN(Number(".")));
assert(isNaN(Number(".e2")));
assert(Number("0.") == 0);
assert(Number(".0") == 0);
