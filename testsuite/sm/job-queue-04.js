




Promise.resolve(42).then(() => {});

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);
dbg.onNewScript = script => {};











oomTest(() => {
    g.eval("(function() {})");
}, {expectExceptionOnFailure: false});
