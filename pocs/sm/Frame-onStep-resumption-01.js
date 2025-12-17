var g = newGlobal({newCompartment: true});
g.eval("function f(x) {\n" +
       "    var a = x * x;\n" +
       "    return a;\n" +
       "}\n");

var dbg = Debugger(g);
dbg.onEnterFrame = function (frame) {
    frame.onStep = function () { return {return: "pass"}; };
};

print(g.f(4), "pass");
