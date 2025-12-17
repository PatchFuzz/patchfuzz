var g = newGlobal({newCompartment: true});
g.a = 0;
g.eval("function f() {\n" +
       "    a += 2;\n" +
       "    a += 2;\n" +
       "    a += 2;\n" +
       "    return a;\n" +
       "}\n");

var dbg = Debugger(g);
var seen = [0, 0, 0, 0, 0, 0, 0];
dbg.onEnterFrame = function (frame) {
    frame.onStep = function () {
        print(arguments.length, 0);
        print(this, frame);
        seen[g.a] = 1;
    };
}

g.f();
print(seen.join(""), "1010101");
