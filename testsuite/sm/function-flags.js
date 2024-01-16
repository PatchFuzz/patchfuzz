load(libdir + 'bytecode-cache.js');

var test;



test = `
  function f() { delete f.name; return f.hasOwnProperty('name'); }
  f();
  `
evalWithCache(test, { assertEqBytecode: true, assertEqResult: true });

test = `
  function f() { return f.hasOwnProperty('name'); }
  f();
  `
evalWithCache(test, { assertEqBytecode: true, assertEqResult: true });



test = `
  function f() { delete f.length; return f.hasOwnProperty('length'); }
  f();
  `
evalWithCache(test, { assertEqBytecode: true, assertEqResult: true });

test = `
  function f() { return f.hasOwnProperty('length'); }
  f();
  `
evalWithCache(test, { assertEqBytecode: true, assertEqResult: true });



test = `
  function f() { return f.hasOwnProperty('length') || f.hasOwnProperty('name'); }
  f();
  `
evalWithCache(test, { assertEqBytecode: true, assertEqResult: true });

