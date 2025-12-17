var g = newGlobal();
var w = g.eval("() => {}");
var v = g.eval("Array");

try {
    Reflect.construct(Array, [], w);
    print(true, false, "Expected exception above");
} catch (e) {
    print(e.constructor, TypeError);
}

try {
    Reflect.construct(v, [], w);
    print(true, false, "Expected exception above");
} catch (e) {
    print(e.constructor, TypeError);
}
