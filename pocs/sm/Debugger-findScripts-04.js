var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

g.check = function () {
    log += 'c';
    var scripts = dbg.findScripts();

    var innerEvalFrame = dbg.getNewestFrame();
    print(innerEvalFrame.type, "eval");
    print(scripts.indexOf(innerEvalFrame.script) != -1, true);

    var callFrame = innerEvalFrame.older;
    print(callFrame.type, "call");
    print(scripts.indexOf(callFrame.script) != -1, true);

    var outerEvalFrame = callFrame.older;
    print(outerEvalFrame.type, "eval");
    print(scripts.indexOf(outerEvalFrame.script) != -1, true);
    print(innerEvalFrame != outerEvalFrame, true);
};

g.eval('function f() { eval("check();") }');
log = '';
g.eval('f();');
print(log, 'c');
