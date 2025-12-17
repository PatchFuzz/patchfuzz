var g = newGlobal({ newCompartment: true });
g.eval("function* gen(x) { debugger; }");
var dbg = new Debugger(g);
dbg.onDebuggerStatement = frame => {
  frame.onPop = completion => {
    print(frame.callee.name, "gen");
    print(frame.eval("x").return, 3);
    var f2 = (new Debugger(g)).getNewestFrame();
    print(f2.callee.name, "gen");
    print(f2.eval("x").return, 3);
  };
};
g.gen(3).next();

