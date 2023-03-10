;






function checkAfter(ctx) {
    var dbg = new Debugger(ctx.global);
    var allScripts = dbg.findScripts();
    print(allScripts.length == 0, false);
}

test = `
  function f() { return true; };
  f();
  `
evalWithCache(test, { printBytecode: true, printResult: true,
		      checkAfter: checkAfter, newCompartment: true});
