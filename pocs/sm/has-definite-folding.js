var max = 40;
setJitCompilerOption("ion.warmup.trigger", max - 10);

function defineProperty() {
    var abc = {};
    Object.defineProperty(abc, "x", {value: 1})
    print(abc.x, 1);
}

function simple() {
    var o = {a: 1};
    print("a" in o, true);
    print("b" in o, false);
    print(o.hasOwnProperty("a"), true);
    print(o.hasOwnProperty("b"), false);
}

function proto() {
    var o = {a: 1, __proto__: {b: 2}};
    print("a" in o, true);
    print("b" in o, true);
    print("c" in o, false);
    print(o.hasOwnProperty("a"), true);
    print(o.hasOwnProperty("b"), false);
    print(o.hasOwnProperty("c"), false);
}

for (var i = 0; i < max; i++) {
    defineProperty();
    simple();
    proto();
}
