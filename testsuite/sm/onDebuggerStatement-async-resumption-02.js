




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

  
  dbg.onDebuggerStatement = () => {
    return { return: "exit" };
  };

  const result = await it;
  assertEq(result, "exit");
  
  
  g.enterDebuggee();

  throw "all-jobs-completed-successfully";
})();
