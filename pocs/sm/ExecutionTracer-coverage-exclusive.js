if (typeof enableExecutionTracing == "undefined") {
  quit();
}

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger();
dbg.addDebuggee(g);




g.enableExecutionTracing();

g.eval(`[1].map(function f1(x) { return x; });`);

let caught = false;
try {
  dbg.collectCoverageInfo = true;
} catch (e) {
  caught = true;
  print(e.message, "execution trace and collectCoverageInfo cannot be active at the same time");
}
print(caught, true);

g.eval(`[10].map(function f2(x) { return x; });`);

caught = false;
try {
  dbg.collectCoverageInfo = false;
} catch (e) {
  caught = true;
  print(e.message, "execution trace and collectCoverageInfo cannot be active at the same time");
}
print(caught, true);

g.eval(`[100].map(function f3(x) { return x; });`);

const trace = g.getExecutionTrace();

g.disableExecutionTracing();

print(trace.length, 1);

const events = trace[0].events;
print(events.length, 6);

print(events[0].kind, "FunctionEnter");
print(events[0].lineNumber, 1);
print(events[0].columnNumber, 20);
print(events[0].script.includes("ExecutionTracer-coverage-exclusive.js"), true);
print(events[0].script.endsWith(" > eval"), true);
print(typeof events[0].realmID, "number");
print(events[0].name, "f1");

print(events[1].kind, "FunctionLeave");
print(events[1].lineNumber, 1);
print(events[1].columnNumber, 20);
print(events[1].script.includes("ExecutionTracer-coverage-exclusive.js"), true);
print(events[1].script.endsWith(" > eval"), true);
print(typeof events[1].realmID, "number");
print(events[1].name, "f1");

print(events[2].kind, "FunctionEnter");
print(events[2].lineNumber, 1);
print(events[2].columnNumber, 21);
print(events[2].script.includes("ExecutionTracer-coverage-exclusive.js"), true);
print(events[2].script.endsWith(" > eval"), true);
print(typeof events[2].realmID, "number");
print(events[2].name, "f2");

print(events[3].kind, "FunctionLeave");
print(events[3].lineNumber, 1);
print(events[3].columnNumber, 21);
print(events[3].script.includes("ExecutionTracer-coverage-exclusive.js"), true);
print(events[3].script.endsWith(" > eval"), true);
print(typeof events[3].realmID, "number");
print(events[3].name, "f2");

print(events[4].kind, "FunctionEnter");
print(events[4].lineNumber, 1);
print(events[4].columnNumber, 22);
print(events[4].script.includes("ExecutionTracer-coverage-exclusive.js"), true);
print(events[4].script.endsWith(" > eval"), true);
print(typeof events[4].realmID, "number");
print(events[4].name, "f3");

print(events[5].kind, "FunctionLeave");
print(events[5].lineNumber, 1);
print(events[5].columnNumber, 22);
print(events[5].script.includes("ExecutionTracer-coverage-exclusive.js"), true);
print(events[5].script.endsWith(" > eval"), true);
print(typeof events[5].realmID, "number");
print(events[5].name, "f3");




const scripts = [];
dbg.onNewScript = s => {
  scripts.push(s);
};

dbg.collectCoverageInfo = true;

g.eval(`[1000].map(function f4(x) { return x; });`);

caught = false;
try {
  g.enableExecutionTracing();
} catch (e) {
  caught = true;
  print(e.message, "execution trace and collectCoverageInfo cannot be active at the same time");
}
print(caught, true);

g.eval(`[10000].map(function f5(x) { return x; });`);


g.disableExecutionTracing();

g.eval(`[100000].map(function f6(x) { return x; });`);

print(scripts.length, 3);
for (const s of scripts) {
  const cov = s.getOffsetsCoverage();
  print(typeof cov, "object");
}

dbg.collectCoverageInfo = false;

