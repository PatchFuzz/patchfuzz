const g = newGlobal({newCompartment: true});
const dbg = Debugger(g);
let count = 0;
dbg.onNewScript = function (script) {
    count += 1;
    print(script.isModule, false);
};
const m = g.eval("");
print(count, 1);
