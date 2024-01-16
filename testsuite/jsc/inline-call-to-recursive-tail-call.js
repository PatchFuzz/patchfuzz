"use strict";



function factorial(n) {
    function aux(n) {
        if (n == 1)
            return 1;
        return factorial(n - 1);
    }

    return n * aux(n);
}



function factorial2(n) {
    function aux2(n) {
        if (n == 1)
            return 1;
        return factorial2(n - 1);
    }
    function id(n) {
        return n;
    }

    return id(n * aux2(n));
}


function factorial3(n) {
    function aux3(n, acc) {
        if (n == 1)
            return acc;
        return aux3 (n-1, n*acc);
    }

    return n * aux3(n-1, 1);
}


function factorial4(n, acc) {
    function aux4(n, acc) {
        if (n == 1)
            return acc;
        return factorial4(n-1, n*acc);
    }

    if (acc)
        return aux4(n, acc);
    return aux4(n, 1);
}



function foo(a, b) {
    if (a == 0)
        return 42;
    if (a == 1)
        return foo(a - 1);
    if (a == 2)
        return foo(b - 1, a);
    return foo (b - 1, a, 43);
}



function bar(x, y) {
    function auxBar(a, b) {
        if (a == 0)
            return 42;
        if (a == 1)
            return auxBar(a - 1);
        if (a == 2)
            return auxBar(b - 1, a);
        return auxBar(b - 1, a, 43);
    }

    return auxBar(x, y);
}

function test(result, expected, name) {
    if (result != expected)
        throw "Wrong result for " + name + ": " + result + " instead of " + expected;
}

for (var i = 0; i < 10000; ++i) {
    test(factorial(20), 2432902008176640000, "factorial");
    test(factorial2(20), 2432902008176640000, "factorial2");
    test(factorial3(20), 2432902008176640000, "factorial3");
    test(factorial4(20), 2432902008176640000, "factorial4");
    test(foo(10, 10), 42, "foo");
    test(bar(10, 10), 42, "bar");
}
