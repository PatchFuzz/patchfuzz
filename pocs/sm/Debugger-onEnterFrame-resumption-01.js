var g = newGlobal({newCompartment: true});
g.set = false;
g.eval("function f() {\n" +
       "    set = true;\n" +
       "    return 'fail';\n" +
       "}\n");
g.eval("function g() { return 'g ' + f(); }");
g.eval("function h() { return 'h ' + g(); }");

var dbg = Debugger(g);
var savedFrame;
dbg.onEnterFrame = function (frame) {
    savedFrame = frame;
    return {return: "pass"};
};


savedFrame = undefined;
print(g.f(), "pass");
print(savedFrame.onStack, false);
print(g.set, false);


savedFrame = undefined;
var r = new g.f;
print(typeof r, "object");
print(savedFrame.onStack, false);
print(g.set, false);

var count = 0;
dbg.onEnterFrame = function (frame) {
    count++;
    if (count == 3) {
        savedFrame = frame;
        return {return: "pass"};
    }
    return undefined;
};
g.set = false;
savedFrame = undefined;
print(g.h(), "h g pass");
print(savedFrame.onStack, false);
print(g.set, false);
