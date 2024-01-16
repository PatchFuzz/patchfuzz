

var f = a => {
    if (a)
        return a + 1;
    throw "FAIL";
};

assertEq(f(1), 2);
