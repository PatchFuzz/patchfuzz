;

var g = newGlobal({newCompartment: true});
g.eval("function* gen(a) { debugger; yield a; }");
g.eval("function test() { debugger; }");
var dbg = new Debugger(g);
var genframe;
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    if (frame.callee.name == 'gen')
        genframe = frame;
    else
        print(function () { genframe.eval("a"); }, Error);
    hits++;
};
g.eval("var it = gen(42); print(it.next().value, 42); test();");
print(hits, 2);
