load(libdir + 'bytecode-cache.js');






function checkAfter(ctx) {
    var dbg = new Debugger(ctx.global);
    var allScripts = dbg.findScripts();
    assertEq(allScripts.length == 0, false);
}

test = `
  function f() { return true; };
  f();
  `
evalWithCache(test, { assertEqBytecode: true, assertEqResult: true,
		      checkAfter: checkAfter, newCompartment: true});
