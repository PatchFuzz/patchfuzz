




let g = newGlobal({ newCompartment: true });
g.eval(`
  async function asyncFn(x) {
    await Promise.resolve();
    debugger;
  }
  function enterDebuggee(){}
`);
const dbg = new Debugger(g);

(async function() {
  let it = g.asyncFn();

  
  dbg.onEnterFrame = frame => {
    dbg.onEnterFrame = undefined;
    const bps = frame.script.getPossibleBreakpoints({ line: 4 });
    assertEq(bps.length, 1);
    frame.script.setBreakpoint(bps[0].offset, {
      hit: () => ({ return: "exit" })
    });
  };

  const result = await it;
  assertEq(result, "exit");
  
  
  g.enterDebuggee();


  throw "all-jobs-completed-successfully";
})();
