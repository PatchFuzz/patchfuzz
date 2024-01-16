

function testWarn(code, lineNumber, columnNumber) {
  enableLastWarning();
  eval(code);
  var warning = getLastWarning();
  assertEq(warning !== null, true, "warning should be caught for " + code);
  assertEq(warning.name, "Warning");
  assertEq(warning.lineNumber, lineNumber);
  assertEq(warning.columnNumber, columnNumber);

  clearLastWarning();
  Reflect.parse(code);
  warning = getLastWarning();
  assertEq(warning !== null, true, "warning should be caught for " + code);
  assertEq(warning.name, "Warning");
  
  
  disableLastWarning();
}

function testPass(code) {
  enableLastWarning();
  eval(code);
  var warning = getLastWarning();
  assertEq(warning, null, "warning should not be caught for " + code);

  clearLastWarning();
  Reflect.parse(code);
  warning = getLastWarning();
  assertEq(warning, null, "warning should not be caught for " + code);
  disableLastWarning();
}

testPass(`
function f() {
  return (
    1 + 2
  );
}
`);


testWarn(`
function f() {
  var i = 0;
  return
    ++i;
}
`, 5, 4);
testWarn(`
function f() {
  var i = 0;
  return
    --i;
}
`, 5, 4);


testWarn(`
function f() {
  return
    [1, 2, 3];
}
`, 4, 4);


testWarn(`
function f() {
  return
    {x: 10};
}
`, 4, 4);
testWarn(`
function f() {
  return
  {
    method()
    {
      f();
    }
  };
}
`, 4, 2);


testWarn(`
function f() {
  return
    (1 + 2);
}
`, 4, 4);


testWarn(`
function f() {
  return
    f;
}
`, 4, 4);


testWarn(`
function f() {
  return
    1 + 2;
}
`, 4, 4);
testWarn(`
function f() {
  return
    .1 + .2;
}
`, 4, 4);


testWarn(`
function f() {
  return
    "foo";
}
`, 4, 4);
testWarn(`
function f() {
  return
    "use struct";
}
`, 4, 4);
testWarn(`
function f() {
  return
    'foo';
}
`, 4, 4);


testWarn(`
function f() {
  return
    \`foo\${1 + 2}\`;
}
`, 4, 4);
testWarn(`
function f() {
  return
    \`foo\`;
}
`, 4, 4);


testWarn(`
function f() {
  return
    /foo/;
}
`, 4, 4);


testWarn(`
function f() {
  return
    true;
}
`, 4, 4);
testWarn(`
function f() {
  return
    false;
}
`, 4, 4);


testWarn(`
function f() {
  return
    null;
}
`, 4, 4);


testWarn(`
function f() {
  return
    this;
}
`, 4, 4);


testWarn(`
function f() {
  return
    new Array();
}
`, 4, 4);


testWarn(`
function f() {
  var a = {x: 10};
  return
    delete a.x;
}
`, 5, 4);


testWarn(`
function* f() {
  return
    yield 1;
}
`, 4, 4);


testWarn(`
function f() {
  return
    class A { constructor() {} };
}
`, 4, 4);


testWarn(`
function f() {
  return
    +1;
}
`, 4, 4);
testWarn(`
function f() {
  return
    -1;
}
`, 4, 4);
testWarn(`
function f() {
  return
    !1;
}
`, 4, 4);
testWarn(`
function f() {
  return
    ~1;
}
`, 4, 4);


testPass(`
var f = new Function("return\\n");
`);


testPass(`
function f() {
  return;
  ; 
}
`);


testPass(`
function f() {
  {
    return
  }
}
`);


testPass(`
function f() {
  g();
  return
  function g() {}
}
`);


testWarn(`
function f() {
  return
  if (true)
    1 + 2;
}
`, 4, 2);


testPass(`
function f() {
  if (true)
    return
  else
    1 + 2;
}
`);


testWarn(`
function f() {
  return
  switch (1) {
    case 1:
      break;
  }
}
`, 4, 2);


testWarn(`
function f() {
  switch (1) {
    case 1:
      return;
      1 + 2;
      break;
  }
}
`, 6, 6);


testPass(`
function f() {
  switch (1) {
    case 1:
      return;
      break;
  }
}
`);


testPass(`
function f() {
  switch (1) {
    case 0:
      return
    case 1:
      break;
  }
}
`);


testPass(`
function f() {
  switch (1) {
    case 0:
      return
    default:
      break;
  }
}
`);


testWarn(`
function f() {
  return
  while (false)
    1 + 2;
}
`, 4, 2);
testPass(`
function f() {
  do
    return
  while (false);
}
`);


testWarn(`
function f() {
  return
  do {
    1 + 2;
  } while (false);
}
`, 4, 2);


testWarn(`
function f() {
  return
  for (;;) {
    break;
  }
}
`, 4, 2);


testPass(`
function f() {
  for (;;) {
    return
    break;
  }
}
`, 5, 4);


testWarn(`
function f() {
  for (;;) {
    return
    continue;
  }
}
`, 5, 4);


testPass(`
function f() {
  return
  var a = 1;
}
`);


testWarn(`
function f() {
  return
  const a = 1;
}
`, 4, 2);


testWarn(`
function f() {
  return
  with ({}) {
    1;
  }
}
`, 4, 2);


testWarn(`
function f() {
  return
  return;
}
`, 4, 2);


testWarn(`
function f() {
  return
  try {
  } catch (e) {
  }
}
`, 4, 2);


testPass(`
function f() {
  return
  throw 1;
}
`);


testWarn(`
function f() {
  return
  debugger;
}
`, 4, 2);


testWarn(`
function f() {
  return
  let a = 1;
}
`, 4, 2);



testWarn(`
function f() {
  return
  var a = 0;
  (1 + 2);
}
`, 5, 2);

testWarn(`
function f() {
  return
  function f() {}
  var a = 0;
  (1 + 2);
}
`, 6, 2);
