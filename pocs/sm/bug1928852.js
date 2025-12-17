function test() {
  g = newGlobal();
  if (!('oomTest' in g)) {
    return;
  }

  g.eval(`
  Int8Array;
  evalcx('\
    /x/;\
    oomTest(function() {\
      eval("function b() {}; function* f() {}");\
    });\
  ', newGlobal());
  `);
}
test();
