const g = newGlobal({ newCompartment: true });
const dbg = new Debugger(g);


g.eval("async function* f() { }");


dbg.onEnterFrame = () => {};


ignoreUnhandledRejections();
oomTest(function() { g.f().next(); });


dbg.onDebuggerStatement = frame => { frame.onStep = () => {}; }
g.eval("debugger");
