try {
    g = newGlobal({ newCompartment: true });
    g.z = this;
    g.eval(
        "(" +
        function () {
            Debugger(z).onExceptionUnwind = function (y) {
                y.eval("f=0");
            };
        } +
        ")()"
    );
    (function f() {
        x;
    })();
} catch (e) {
    print(e instanceof ReferenceError, true);
}
