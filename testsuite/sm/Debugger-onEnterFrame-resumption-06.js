




let g = newGlobal({ newCompartment: true });
g.eval(`
  async function asyncFn(x) {
    await Promise.resolve();
  }
  function enterDebuggee(){}
`);
const dbg = new Debugger(g);

(async function() {
  let it = g.asyncFn();

  
  dbg.onEnterFrame = () => {
    dbg.onEnterFrame = undefined;
    return { return: "exit" };
  };

  const result = await it;
  assertEq(result, "exit");
  
  
  g.enterDebuggee();

  throw "all-jobs-completed-successfully";
})();
