



var g = newGlobal({ newCompartment: true });
g.eval(`
  function* gen() {
    debugger;
    yield 1;
  }

  function use_gen() {
    var gen1 = gen();
    var gen2 = gen();

    gen1.next();
    gen2.next();

    gen1.next();
    gen2.next();
  }
`);

var dbg = new Debugger(g);
var frame;
dbg.onDebuggerStatement = f => {
  frame = f;
};

g.use_gen();
