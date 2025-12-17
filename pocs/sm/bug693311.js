function f(x) {
    print("a" !== x, true);
    print("b" != x, true);
    print("c" === x, false);
    print("d" == x, false);
}
f(1);
f(1);
