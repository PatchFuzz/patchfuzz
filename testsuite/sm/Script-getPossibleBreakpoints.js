
assertBreakpoints(`
  a;
  obj.prop;
`);


assertBreakpoints(`
  a();
  obj.prop();
`);


assertBreakpoints(`
  a(1);
  a(1,2);
  a(1,2,3);
`);



assertBreakpoints(`
  "45";
  "45" + a();
  b() + "45";

  "45" + o.a();
  o.b() + "45";
  "45" + o.a() + o.b();
  o.b() + "45" + o.a();
  o.b() + o.a() + "45";
`);


assertBreakpoints(`
  var foo1 = "" + o.a + "" + b(),
      foo2 = "45",
      foo3 = "45" + a(),
      foo4 = b() + "45",
      foo5 = "45" + a() + b(),
      foo6 = b() + "45" + a(),
      foo7 = b() + a() + "45",
      foo8 = "45" + o.a(),
      foo9 = o.b() + "45",
      foo10 = "45" + o.a() + o.b(),
      foo11 = o.b() + "45" + o.a(),
      foo12 = o.b() + o.a() + "45";
`);


assertBreakpoints(`
  let foo1 = "" + o.a + "" + b(),
      foo2 = "45",
      foo3 = "45" + a(),
      foo4 = b() + "45",
      foo5 = "45" + a() + b(),
      foo6 = b() + "45" + a(),
      foo7 = b() + a() + "45",
      foo8 = "45" + o.a(),
      foo9 = o.b() + "45",
      foo10 = "45" + o.a() + o.b(),
      foo11 = o.b() + "45" + o.a(),
      foo12 = o.b() + o.a() + "45";
`);


assertBreakpoints(`
  const foo1 = "" + o.a + "" + b(),
        foo2 = "45",
        foo3 = "45" + a(),
        foo4 = b() + "45",
        foo5 = "45" + a() + b(),
        foo6 = b() + "45" + a(),
        foo7 = b() + a() + "45",
        foo8 = "45" + o.a(),
        foo9 = o.b() + "45",
        foo10 = "45" + o.a() + o.b(),
        foo11 = o.b() + "45" + o.a(),
        foo12 = o.b() + o.a() + "45";
`);


assertBreakpoints(`
  ;
  ;
  ;
  a();
`);


assertBreakpoints(`
  if (a) {}
  if (a()) {}
  if (obj.prop) {}
  if (obj.prop()) {}
  if ("42" + a) {}
  if ("42" + a()) {}
  if ("42" + obj.prop) {}
  if ("42" + obj.prop()) {}
`);


assertBreakpoints(`
  do {
    fn();
  } while(a)
  do {
    fn();
  } while("42" + a());
`);


assertBreakpoints(`
  while(a) {
    fn();
  }
  while("42" + a()) {
    fn();
  }
`);


assertBreakpoints(`
  for (b = 42; c; d) fn();
  for (var b = 42; c; d) fn();
  for (let b = 42; c; d) fn();
  for (const b = 42; c; d) fn();
  for (b in d) fn();
  for (var b in d) fn();
  for (let b in d) fn();
  for (const b in d) fn();
  for (b of d) fn();
  for (var b of d) fn();
  for (let b of d) fn();
  for (const b of d) fn();
`);


assertBreakpoints(`
  switch (d) {
    case 42:
      fn();
  }
`);


assertBreakpoints(`
  while (a) {
    continue;
  }
`);


assertBreakpoints(`
  while (a) {
    break;
  }
`);


assertBreakpoints(`
  return a + b();
`);


assertBreakpoints(`
  with (a) {
    fn();
  }
`);


assertBreakpoints(`
  throw fn();
  throw "42" + fn();
`);


assertBreakpoints(`
  debugger;
  debugger;
`);


assertBreakpoints(`
  {
    a();
  }
`);


assertBreakpoints(`
  class Foo2 {}
  class Foo extends ("" + o.a + a() + b()) { }
`);


assertBreakpoints(`
  void a();
`);
assertBreakpoints(`
  a() + b();
`);
assertBreakpoints(`
  for (
    var i = 0;
    i < n;  
    ++i
  ) {
    console.log("omg");
  }
`);
assertBreakpoints(`
  function * gen(){
    var foo = (
      (console.log('before', a())),
      (yield console.log('mid', b())),
      (console.log('after', a()))
    );
    var foo2 = a() + b();
    console.log(foo);
  }
  var i = 0;
  for (var foo of gen()) {
    console.log(i++);
  }
`);
assertBreakpoints(`
  var fn = () => {
    console.log("fn");
    return new Proxy({ prop: 42 }, {
      deleteProperty() {
        console.log("delete");
      }
    });
  };
`);
assertBreakpoints(`
  var fn = async (arg) => {
    console.log("fn");
  };
`);
assertBreakpoints(`
  var fn = arg => {
    console.log("fn");
  };
`);
assertBreakpoints(`
  var fn = async arg => {
    console.log("fn");
  };
`);
assertBreakpoints(`
  var fn = (arg) => console.log("fn");
  var fn = async (arg) => console.log("fn");
  var fn = arg => console.log("fn");
  var fn = async arg => console.log("fn");
`);
assertBreakpoints(`
  if ((delete fn().prop) + b()) {
    console.log("foo");
  }
`);
assertBreakpoints(`
  for (var j = 0; (o.a) < 3; (j++, a(), b())) {
    console.log(i);
  }
`);
assertBreakpoints(`
  function fn2(
    [a, b] = (a(), b())
  ) {
    a();
    b();
  }

  ({ a, b } = (a(), b()));
`);
assertBreakpoints(`
  o.a + "42" + a() + b();
`);
assertBreakpoints(`
  a();
  o.a(b());
`);
assertBreakpoints(`
  ({}[obj.a] = 42 + a());
`);
assertBreakpoints(`
  var {
    foo = o.a
  } = {};
`);
assertBreakpoints(`
  var ack = [
    o.a,
    o.b,
    a(),
    a(),
    a(),
    a(),
    a(),
    a(),
    a(),
  ];
`);

function assertBreakpoints(expected) {
  const input = expected.replace(/\/\*[BS]\*\

  var global = newGlobal({ newCompartment: true });
  var dbg = Debugger(global);
  dbg.onDebuggerStatement = function(frame) {
    const fScript = frame.environment.parent.getVariable("f").script;

    let positions = [];
    (function recurse(script) {
      const bps = script.getPossibleBreakpoints();
      const offsets = script.getPossibleBreakpointOffsets();

      assertEq(offsets.length, bps.length);
      for (let i = 0; i < bps.length; i++) {
        assertEq(offsets[i], bps[i].offset);
      }

      positions = positions.concat(bps);
      script.getChildScripts().forEach(recurse);
    })(fScript);

    const result = annotateOffsets(input, positions);
    assertEq(result, expected + "");
  };

  global.eval(`function f(){${input}} debugger;`);
}

function annotateOffsets(code, positions) {
  const offsetLookup = createOffsetLookup(code);

  positions = positions.slice();
  positions.sort((a, b) => {
    const lineDiff = a.lineNumber - b.lineNumber;
    return lineDiff === 0 ? a.columnNumber - b.columnNumber : lineDiff;
  });
  positions.reverse();

  let output = "";
  let last = code.length;
  for (const { lineNumber, columnNumber, isStepStart } of positions) {
    const offset = offsetLookup(lineNumber, columnNumber);

    output =
      "" +
      code.slice(offset, last) +
      output;
    last = offset;
  }
  return code.slice(0, last) + output;
}

function createOffsetLookup(code) {
  const lines = code.split(/(\r?\n|\r|\u2028|\u2029)/g);
  const lineOffsets = [];

  let count = 0;
  for (const [i, str] of lines.entries()) {
    if (i % 2 === 0) {
      lineOffsets[i / 2] = count;
    }
    count += str.length;
  }

  return function(line, column) {
    
    line = line - 1;

    if (!lineOffsets.hasOwnProperty(line)) {
      throw new Error("Unknown line " + line + " column " + column);
    }
    return lineOffsets[line] + column;
  };
}
