


var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gDO = dbg.addDebuggee(g);
g.non_debuggee = function non_debuggee () {}

function checkExpr(expr, { isAsync, isGenerator })
{
  print("Evaluating: " + JSON.stringify(expr));
  let completion = gDO.executeInGlobal(expr);
  if (completion.throw)
    throw completion.throw.unsafeDereference();

  let fn = completion.return;
  assertEq(fn.isAsyncFunction, isAsync);
  assertEq(fn.isGeneratorFunction, isGenerator);

  
  if (fn.script) {
    assertEq(fn.isAsyncFunction, fn.script.isAsyncFunction);
    assertEq(fn.isGeneratorFunction, fn.script.isGeneratorFunction);
  }
}

checkExpr('({})', { isAsync: undefined, isGenerator: undefined });
checkExpr('non_debuggee', { isAsync: undefined, isGenerator: undefined });
checkExpr('(function(){})', { isAsync: false, isGenerator: false });
checkExpr('(function*(){})', { isAsync: false, isGenerator: true });
checkExpr('(async function snerf(){})', { isAsync: true, isGenerator: false });
checkExpr('(async function* omlu(){})', { isAsync: true, isGenerator: true });

checkExpr('new Function("1+2")', { isAsync: false, isGenerator: false });
checkExpr('Object.getPrototypeOf(function*(){}).constructor("1+2")',
          { isAsync: false, isGenerator: true });
checkExpr('Object.getPrototypeOf(async function(){}).constructor("1+2")',
          { isAsync: true, isGenerator: false });
checkExpr('Object.getPrototypeOf(async function*(){}).constructor("1+2")',
          { isAsync: true, isGenerator: true });


function checkFrame(expr, type)
{
  var log = '';
  dbg.onDebuggerStatement = function(frame) {
    log += 'd';
    assertEq(frame.type, type);
    assertEq(frame.script.isAsyncFunction, false);
    assertEq(frame.script.isGeneratorFunction, false);
  }
  gDO.executeInGlobal(expr);
  assertEq(log, 'd');
}

checkFrame('debugger;', 'global');
checkFrame('eval("debugger;")', 'eval');
