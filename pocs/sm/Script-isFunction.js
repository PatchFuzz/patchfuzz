const g = newGlobal({newCompartment: true});
const dbg = new Debugger;
dbg.addDebuggee(g);

let gNumFunctionScripts = 0;
function countFunctionScripts(script) {
  if (script.isFunction) {
    gNumFunctionScripts++;
  }
  return script.getChildScripts().forEach(countFunctionScripts);
}

dbg.onNewScript = countFunctionScripts;

g.eval(`
function f() {
  function f2() {}
}
async function g() {}
function* h() {}
`);

print(gNumFunctionScripts, 4);
