function f() {
    return new ({});
}
function g() {
    return ({})();
}
try {
    f();
    print(0, 1);
} catch (e) {
    print(e instanceof TypeError, true);
}
try {
    g();
    print(0, 1);
} catch (e) {
    print(e instanceof TypeError, true);
}
