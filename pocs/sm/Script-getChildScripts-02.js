var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var scripts = [];
var cs;
dbg.onDebuggerStatement = function (frame) {
    scripts.push(frame.script);
    if (scripts.length === 1)
        cs = frame.script.getChildScripts();
};

g.eval("function f() { debugger; }\n" +
       "var g = function () { debugger; }\n" +
       "debugger; f(); g();");

print(scripts.length, 3);
print(cs.length, 2);
print(cs[0], scripts[1]);
print(cs[1], scripts[2]);
