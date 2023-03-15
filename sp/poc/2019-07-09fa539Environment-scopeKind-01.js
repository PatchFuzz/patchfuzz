

;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);

function getScopeKinds(text) {
  const kinds = [];
  dbg.onDebuggerStatement = frame => {
    let env = frame.environment;
    while (env) {
      kinds.push(env.scopeKind);
      env = env.parent;
    }
  };
  g.eval(text);
  return kinds;
}

printArray(getScopeKinds("function f(x) { debugger; }; f()"),
              ["function", null, null]);
printArray(getScopeKinds("function f(x) { let y = 0; debugger; }; f()"),
              ["function lexical", "function", null, null]);
printArray(getScopeKinds("function f(x) { let y = 0; with(x) { debugger; } } f({})"),
              [null, "function lexical", "function", null, null]);
