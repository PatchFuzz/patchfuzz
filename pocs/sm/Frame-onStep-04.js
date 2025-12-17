var g = newGlobal({newCompartment: true});
g.eval("function f(x) {\n" +
       "    if (x > 0)\n" +
       "        f(x - 1);\n" +
       "    else\n" +
       "        debugger;\n" +
       "    return x;\n" +
       "}");

var dbg = Debugger(g);
var seen = [0, 0, 0, 0, 0, 0, 0, 0];
function step() {
    seen[this.arguments[0]] = 1;
}
dbg.onEnterFrame = function (frame) {
    
    var x = frame.arguments[0];
    if (x % 2 === 0)
        frame.onStep = step;
};
dbg.onDebuggerStatement = function (frame) {
    
    
    print(seen.join(""), "10101010");

    
    seen = [0, 0, 0, 0, 0, 0, 0, 0];
};

g.f(7);
print(seen.join(""), "10101010");
