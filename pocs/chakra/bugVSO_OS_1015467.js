function f() {
    var o = Object.create(Object.prototype);
    var w = new WeakMap();
    w.set(o, {});
    Object.keys(o);
    o.aaa = "bbb";

    print("Pass");
}
f();
