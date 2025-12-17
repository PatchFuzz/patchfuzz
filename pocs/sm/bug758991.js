function f(obj) {
    return f.caller;
}
function g(obj) {
    return f(obj);
}
function gg(obj) {
    return f.call(obj, obj);
}

print(g({}), g);

actual = gg(function() {});
print(actual, gg);
