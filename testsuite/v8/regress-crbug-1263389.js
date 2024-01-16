








function crash() { assertTrue(false); }
Object.prototype.__defineSetter__("crashOnSet", crash);

function test() {
  const o = { a: 1 };
  return { ...o, crashOnSet: 42 };
}


test();

test();
