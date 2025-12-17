var g = newGlobal({newCompartment: true});
g.a = 0;
g.eval("function f() {\n" +
       "    a++;\n" +
       "    a++;\n" +
       "    a++;\n" +
       "    a++;\n" +
       "    return a;\n" +
       "}\n");

var dbg = Debugger(g);
var seen = [0, 0, 0, 0, 0];
dbg.onEnterFrame = function (frame) {
    seen[g.a] = 1;
    frame.onStep = function () {
        seen[g.a] = 1;
        if (g.a === 2) {
            frame.onStep = undefined;
            print(frame.onStep, undefined);
        }
    };
}

g.f();
print(seen.join(","), "1,1,1,0,0");
