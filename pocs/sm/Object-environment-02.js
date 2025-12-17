var g = newGlobal({newCompartment: true})
var dbg = new Debugger;
var gDO = dbg.addDebuggee(g);

function check(expr) {
  print("checking " + JSON.stringify(expr));
  let completion = gDO.executeInGlobal(expr);
  if (completion.throw)
    throw completion.throw.unsafeDereference();
  print(completion.return.environment instanceof Debugger.Environment, true);
}

g.eval('function j(a) { }');

check('j');
check('(() => { })');
check('(function f() { })');
check('(function* g() { })');
check('(async function m() { })');
check('(async function* n() { })');
