





function f(a, b, c) {
    arguments[('4294967295')] = 2;
}
assertEq(f(1), "1234");
