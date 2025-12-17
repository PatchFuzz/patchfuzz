if (typeof enableExecutionTracing == "undefined") {
  quit();
}


var g = newGlobal({ newCompartment: true });
var dbg = new Debugger();
dbg.addDebuggee(g);

g.enableExecutionTracing();

oomTest(function () {
  g.eval(`[100].map(function f3(x) { return x; });`);
});

gc();

const trace = g.getExecutionTrace();

g.disableExecutionTracing();

print(trace.length, 1);

const events = trace[0].events;
var err = events.find(e => e.kind == "Error");




if (err) {
  print(err, events[events.length - 1]);
}
