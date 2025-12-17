let g = newGlobal({ newCompartment: true });
g.eval(`
  function foo() {
    bar();
  }
  function bar() {
    throw new Error();
  }
`);

let dbg = Debugger(g);
let unwindHits = 0, popHits = 0;
dbg.onExceptionUnwind = frame => {
  unwindHits++;
  return undefined;
}
dbg.onEnterFrame = frame => {
  frame.onPop = completion => {
    print(completion.stack.functionDisplayName, "bar");
    popHits++;
  };
};

try {
  g.eval("foo()");
} catch (e) {}
print(unwindHits, 3);
print(popHits, 3);
dbg.removeDebuggee(g);
