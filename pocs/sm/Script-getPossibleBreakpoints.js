print(`
  a;
  obj.prop;
`);


print(`
  a();
  obj.prop();
`);


print(`
  a(1);
  a(1,2);
  a(1,2,3);
`);



print(`
  "45";
  "45" + a();
  b() + "45";

  "45" + o.a();
  o.b() + "45";
  "45" + o.a() + o.b();
  o.b() + "45" + o.a();
  o.b() + o.a() + "45";
`);


print(`
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


print(`
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


print(`
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


print(`
  ;
  ;
  ;
  a();
`);


print(`
  if (a) {}
  if (a()) {}
  if (obj.prop) {}
  if (obj.prop()) {}
  if ("42" + a) {}
  if ("42" + a()) {}
  if ("42" + obj.prop) {}
  if ("42" + obj.prop()) {}
`);


print(`
  do {
    fn();
  } while(a)
  do {
    fn();
  } while("42" + a());
`);


print(`
  while(a) {
    fn();
  }
  while("42" + a()) {
    fn();
  }
`);


print(`
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


print(`
  switch (d) {
    case 42:
      fn();
  }
`);


print(`
  while (a) {
    continue;
  }
`);


print(`
  while (a) {
    break;
  }
`);


print(`
  return a + b();
`);


print(`
  with (a) {
    fn();
  }
`);


print(`
  throw fn();
  throw "42" + fn();
`);


print(`
  debugger;
  debugger;
`);


print(`
  {
    a();
  }
`);


print(`
  class Foo2 {}
  class Foo extends ("" + o.a + a() + b()) { }
`);


print(`
  void a();
`);
print(`
  a() + b();
`);
print(`
  for (
    var i = 0;
    i < n;  
    ++i
  ) {
    console.log("omg");
  }
`);
print(`
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
print(`
  var fn = () => {
    console.log("fn");
    return new Proxy({ prop: 42 }, {
      deleteProperty() {
        console.log("delete");
      }
    });
  };
`);
print(`
  var fn = async (arg) => {
    console.log("fn");
  };
`);
print(`
  var fn = arg => {
    console.log("fn");
  };
`);
print(`
  var fn = async arg => {
    console.log("fn");
  };
`);
print(`
  var fn = (arg) => console.log("fn");
  var fn = async (arg) => console.log("fn");
  var fn = arg => console.log("fn");
  var fn = async arg => console.log("fn");
`);
print(`
  if ((delete fn().prop) + b()) {
    console.log("foo");
  }
`);
print(`
  for (var j = 0; (o.a) < 3; (j++, a(), b())) {
    console.log(i);
  }
`);
print(`
  function fn2(
    [a, b] = (a(), b())
  ) {
    a();
    b();
  }

  ({ a, b } = (a(), b()));
`);
print(`
  o.a + "42" + a() + b();
`);
print(`
  a();
  o.a(b());
`);
print(`
  ({}[obj.a] = 42 + a());
`);
print(`
  var {
    foo = o.a
  } = {};
`);
print(`
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

function print(expected) {
  const input = expected.replace(/\/\*[BS]\*\

  var global = newGlobal({ newCompartment: true });
  var dbg = Debugger(global);
  dbg.onDebuggerStatement = function(frame) {
    const fScript = frame.environment.parent.getVariable("f").script;

    let positions = [];
    (function recurse(script) {
      const bps = script.getPossibleBreakpoints();
      const offsets = script.getPossibleBreakpointOffsets();

      print(offsets.length, bps.length);
      for (let i = 0; i < bps.length; i++) {
        print(offsets[i], bps[i].offset);
      }

      positions = positions.concat(bps);
      script.getChildScripts().forEach(recurse);
    })(fScript);

    const result = annotateOffsets(input, positions);
    print(result, expected + "");
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
    return lineOffsets[line] + column - 1;
  };
}
