var uceFault = function (i) {
    if (i % 1500 == 0) {
        uceFault = function (i) { return i % 1500 == 0; };
    }
    return false;
};

function f(i) {
    if (uceFault(i) || uceFault(i))
        g();
    const x = 42;
    function g() {
        return x;
    }
    return g;
}

function loop() {
    for (; i < 4000; i++)
        print(f(i)(), 42);
}

var caught = 0;
var i = 1;
while (i < 4000) {
    try {
        loop();
    } catch(e) {
        print(e instanceof ReferenceError, true);
        print(i == 1500 || i == 3000, true);
        caught += 1;
        i++;
    }
}
print(caught, 2);
