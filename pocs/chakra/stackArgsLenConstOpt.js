function x_min() {
    if (arguments.length < 3) {
        if (arguments[0] < arguments[1]) return arguments[0];
        else return arguments[1];
    }
    return 1;
}

function test0() {
    x_min(15,2);
}

for (var i = 0; i < 100; i++) {
    test0();
}

print("pass");
