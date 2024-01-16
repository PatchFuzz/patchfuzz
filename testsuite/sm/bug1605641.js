
function thrower() {
    throw 9;
}
function f() {
    return [...{} [thrower(...["foo"])]] = "undefined";
}
f();
