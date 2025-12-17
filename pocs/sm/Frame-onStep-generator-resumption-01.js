let g = newGlobal({newCompartment: true});
g.eval(`
  function* f() {
    yield 1;
  }
`);

let dbg = new Debugger(g);
let steps = 0;
let uncaughtErrorsReported = 0;
dbg.onEnterFrame = frame => {
  print(frame.callee.name, "f");
  dbg.onEnterFrame = undefined;
  frame.onStep = () => {
    steps++;

    
    
    
    return {return: "ponies"};
  };

  
  
  frame.onPop = completion => {};
};

dbg.uncaughtExceptionHook = (reason) => {
  
  
  print(reason instanceof TypeError, true);
  uncaughtErrorsReported++;
  return undefined;  
};

let result = g.f();
print(result instanceof g.f, true);

print(steps > 0, true);
print(uncaughtErrorsReported, steps);
