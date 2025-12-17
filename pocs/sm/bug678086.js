function f() {
    frame = dbg.getNewestFrame();
}
var g = newGlobal();
g.f = function (a, b) { return a + "/" + this . f( ) ; };
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    var f = frame.eval("f").return;
    print(f.call(null, "a", "b").return, "a/b");
};
g.eval("debugger;");
