var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

dbg.onDebuggerStatement = function (frame) {
  
  
  
  assertEq(frame.evalWithBindings(`this === foo;`, { bar: 42 }).return, true);
  assertEq(frame.evalWithBindings(`eval('this') === foo;`, { bar: 42 }).return, true);
};

g.eval(`
var foo = { bar: function() { debugger; } };
foo.bar();
`);
