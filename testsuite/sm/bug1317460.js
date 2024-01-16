

g = newGlobal();
g.parent = this;
g.eval("(" + function() {
    Debugger(parent).onExceptionUnwind = function() { return 0; };
} + ")()");
async function f() {
    t;
}
f();
