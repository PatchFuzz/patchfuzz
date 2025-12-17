let g = newGlobal({ newCompartment: true });
g.eval(`
  async function asyncFn(x) {
    await Promise.resolve();
    throw new Error();
  }
  function enterDebuggee(){}
`);
const dbg = new Debugger(g);

(async function() {
  let it = g.asyncFn();

  
  dbg.onExceptionUnwind = () => {
    return { return: "exit" };
  };

  const result = await it;
  print(result, "exit");
  
  
  g.enterDebuggee();

  throw "all-jobs-completed-successfully";
})();
