const g = newGlobal({newCompartment: true});
const dbg = Debugger(g);
let count = 0;
dbg.onNewScript = function (script) {
    count += 1;
    print(script.isModule, true);
};
dbg.onDebuggerStatement = function (frame) {
    const { script } = frame;

    print(script.isModule, false);
};
const m = g.parseModule("(function(){ debugger; })()");
moduleLink(m);
moduleEvaluate(m);

print(count, 1);
