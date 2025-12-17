var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

g.check = function () {
    log += 'c';
    var frame = dbg.getNewestFrame();
    print(frame.type, "eval");
    print(dbg.findScripts().indexOf(frame.script) != -1, true);
};

log = '';
g.eval('check()');
print(log, 'c');
