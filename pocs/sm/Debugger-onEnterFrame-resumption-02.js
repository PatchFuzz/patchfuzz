;

var g = newGlobal({newCompartment: true});
g.set = false;
g.eval("function f() {\n" +
       "    set = true;\n" +
       "    return 'fail';\n" +
       "}\n");

var dbg = Debugger(g);
var savedFrame;
dbg.onEnterFrame = function (frame) {
    savedFrame = frame;
    return {throw: "pass"};
};

savedFrame = undefined;
print(g.f, "pass");
print(savedFrame.onStack, false);
print(g.set, false);

savedFrame = undefined;
print(function () { new g.f; }, "pass");
print(savedFrame.onStack, false);
print(g.set, false);

