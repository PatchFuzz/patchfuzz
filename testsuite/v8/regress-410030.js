



try {
  throw 0;
} catch(e) {
  assertSame(3, eval("delete x; const x=3; x"));
}


try {
  throw 0;
} catch(e) {
  assertSame(3, (1,eval)("delete x1; const x1=3; x1"));
}


try {
  throw 0;
} catch(e) {
  with({}) {
    assertSame(3, eval("delete x2; const x2=3; x2"));
  }
}


(function f() {
  try {
    throw 0;
  } catch(e) {
    assertSame(3, eval("delete x; const x=3; x"));
  }
}());


(function f() {
  try {
    throw 0;
  } catch(e) {
    assertSame(3, (1,eval)("delete x4; const x4=3; x4"));
  }
}());
