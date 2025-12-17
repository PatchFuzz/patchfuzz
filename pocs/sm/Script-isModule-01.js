const g = newGlobal({newCompartment: true});
const dbg = Debugger(g);
let count = 0;
dbg.onNewScript = function (script) {
    count += 1;
    print(script.isModule, true);
};
const m = g.parseModule("");
moduleLink(m);
moduleEvaluate(m);
print(count, 1);
