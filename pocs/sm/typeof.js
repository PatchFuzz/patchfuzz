function getType(v) {
    return typeof v;
}
function f() {
    for (var i=0; i<100; i++) {
        print(getType({}), "object");
        print(getType(Math.abs), "function");
        print(getType(10), "number");
        print(getType(Math.PI), "number");
        print(getType(true), "boolean");
        print(getType(""), "string");
        print(getType(null), "object");
        print(getType(undefined), "undefined");
    }
}
f();
