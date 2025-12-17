function f() {
    return typeof arguments;
    function arguments() {
        return 7;
    }
}
print(f(), "function");

function g() {
    var arguments = 0;
    return typeof arguments;
}
print(g(), "number");

function h() {
    return typeof h;
    function h() {
        return 7;
    }
}
print(h(), "function");

function i() {
    return typeof i;
    var i;
}
print(i(), "undefined");

function j() {
    return typeof j;
}
print(j(), "function");
