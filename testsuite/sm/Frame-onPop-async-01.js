




let g = newGlobal({newCompartment: true});
g.log = "";
g.eval(`
  async function f() {
    log += "1";
    debugger;
    log += "2";
    await Promise.resolve(3);
    log += "3";
    return "ok";
  }
`);

let dbg = Debugger(g);
dbg.onDebuggerStatement = frame => {
  frame.onPop = completion => {
    
    
    g.log += 'A';
    drainJobQueue();
    g.log += 'B';

    frame.onPop = completion => {
      g.log += 'C';
    };
  };
};

let status = "FAIL - g.f() did not resolve";
g.f().then(value => { status = value; });
assertEq(g.log, "12AB");
drainJobQueue();
assertEq(g.log, "12AB3C");
assertEq(status, "ok");
