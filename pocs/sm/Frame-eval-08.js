var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);


var args, testfn;
dbg.onDebuggerStatement = function (frame) {
    args = frame.eval("arguments").return;
    testfn = frame.eval("test").return;
};
g.eval("function f() { debugger; }");
g.eval("var test = " + function test(args) {
        print(args.length, 3);
        print(args[0], this);
        print(args[1], f);
        print(args[2].toString(), "[object Object]");
        return 42;
    } + ";");
g.eval("f(this, f, {});");

var cv = testfn.apply(null, [args]);
print(cv.return, 42);
