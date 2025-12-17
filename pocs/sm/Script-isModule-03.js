const g = newGlobal({newCompartment: true});
const dbg = Debugger(g);
let count = 0;
dbg.onNewScript = function (script) {
    count += 1;
    print(script.isModule, true);

    dbg.onNewScript = function (script) {
        count += 1;
        print(script.isModule, false);
    };
};
const m = g.parseModule("eval('')");
moduleLink(m);
moduleEvaluate(m);
print(count, 2);
