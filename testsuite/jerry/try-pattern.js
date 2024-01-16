

function check_syntax_error(code)
{
  try {
    eval(code);
    assert(false);
  } catch (e) {
    assert(e instanceof SyntaxError);
  }
}

check_syntax_error("try {} catch() {}");
check_syntax_error("try {} catch([a] {}");
check_syntax_error("try {} catch([a] = [1]) {}");
check_syntax_error("try {} catch({a} = {a:1}) {}");
check_syntax_error("try {} catch(a,) {}");
check_syntax_error("try {} catch(a) { function a() {} }");
check_syntax_error("try {} catch(a) { { function a() {} } function a() {} }");
check_syntax_error("try {} catch([a]) { var a }");
check_syntax_error("try {} catch([a]) { { var a } }");
check_syntax_error("try {} catch([a]) { function a() {} }");

try {
  throw [1,2]
  assert(false)
} catch ([a, b]) {
  assert(a === 1)
  assert(b === 2)
}

try {
  throw { x:1, y:2 }
  assert(false)
} catch ({x, 'y':b}) {
  assert(x === 1)
  assert(b === 2)
}

try {
  throw [1,2]
  assert(false)
} catch ([a, b]) {
  eval("assert(a === 1)")
  eval("assert(b === 2)")
}

try {
  throw { x:1, y:2 }
  assert(false)
} catch ({x, 'y':b}) {
  eval("assert(x === 1)")
  eval("assert(b === 2)")
}

try {
  try {
    throw []
    assert(false)
  } catch ([a = b, b]) {
    assert(false)
  }
} catch (e) {
  assert(e instanceof ReferenceError)
}

try {
  throw [{a : 5}];
} catch([{a}]) {
  assert(a === 5);
}

var catchReached = false;
try {
  throw [{}];
  assert(false);
} catch([{}]) {
  catchReached = true;
}

assert(catchReached);
