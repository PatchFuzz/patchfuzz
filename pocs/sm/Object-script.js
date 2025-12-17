var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gDO = dbg.addDebuggee(g);

function check(expr, expected) {
  print("checking " + JSON.stringify(expr) + ", expecting " +
        (expected ? "script" : "no script"));

  let completion = gDO.executeInGlobal(expr);
  if (completion.throw)
    throw completion.throw.unsafeDereference();

  let val = completion.return;
  if (expected)
    print(val.script instanceof Debugger.Script, true);
  else
    print(val.script, undefined);
}

check('(function g(){})', true);
check('(function* h() {})', true);
check('(async function j() {})', true);
check('(async function* k() {})', true);
check('({})', false);
check('Math.atan2', false);
