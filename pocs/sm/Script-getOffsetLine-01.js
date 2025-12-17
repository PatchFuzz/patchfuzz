var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits;
dbg.onDebuggerStatement = function (frame) {
    var knownLine = frame.eval("line").return;
    print(frame.script.getOffsetLocation(frame.offset).lineNumber, knownLine);
    hits++;
};

hits = 0;
g.eval("var line = new Error().lineNumber; debugger;");
print(hits, 1);

hits = 0;
g.eval("var s = 2 + 2;\n" +
       "s += 2;\n" +
       "line = new Error().lineNumber; debugger;\n" +
       "s += 2;\n" +
       "s += 2;\n" +
       "line = new Error().lineNumber; debugger;\n" +
       "s += 2;\n" +
       "print(s, 12);\n");
print(hits, 2);
