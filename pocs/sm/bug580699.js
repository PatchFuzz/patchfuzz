function f() {
    (function () {
        x;
        function a() {}
        print(a)
    })()
}
this.__defineGetter__("x", gc)
f()
