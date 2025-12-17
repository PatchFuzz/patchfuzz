var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    print(frame.environment.find("x").type, "with");
    hits++;
};

print(g.eval("(function () {\n" +
                "    function g() { x = 1; }\n" +
                "    with ({x: 2}) {\n" +
                "        var x;\n" +
                "        debugger;\n" +
                "        return x;\n" +
                "    }\n" +
                "})();"), 2);
print(hits, 1);
