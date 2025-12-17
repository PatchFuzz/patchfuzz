var g = newGlobal({newCompartment: true});
g.eval("function h() { debugger; }");

var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    hits++;
    if (hits == 1) {
        var rv = frame.eval("try {\n" +
                            "    h();\n" +
                            "    throw 'fail';\n" +
                            "} catch (exc) {\n" +
                            "    caught = exc;\n" +
                            "} finally {\n" +
                            "    finallyHit = true;\n" +
                            "}\n");
        print(rv, null);
    } else {
        frame.older.onStep = function () {
            this.onStep = undefined;
            return null;
        };
    }
};

g.h();
print(hits, 2);
print("caught" in g, false);
print("finallyHit" in g, false);
