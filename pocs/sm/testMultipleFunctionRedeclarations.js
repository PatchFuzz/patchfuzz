function f1() {
    print(g(), 3);
    function g() { return 1 }
    print(g(), 3);
    function g() { return 2 }
    print(g(), 3);
    function g() { return 3 }
    print(g(), 3);
}
f1();

function f2() {
    print(g(), 2);
    var g = 3;
    print(g, 3);
    function g() { return 1 }
    function g() { return 2 }
}
f2();

function f3() {
    print(g(), 2);
    var g = 3;
    print(g, 3);
    function g() { return 1 }
    var g = 4;
    print(g, 4);
    function g() { return 2 }
}
f3();

function f4() {
    print(g(), 4);
    function g() { return 1 }
    print(g(), 4);
    function g() { return 2 }
    var g = 9;
    print(g, 9);
    function g() { return 3 }
    print(g, 9);
    function g() { return 4 }
    print(g, 9);
}
f4();
