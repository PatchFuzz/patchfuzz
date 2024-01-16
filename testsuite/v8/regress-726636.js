





Object.defineProperty(Promise, Symbol.species, { value: 0 });
var p = new Promise(function() {});
try {
  p.then();
  assertUnreachable();
} catch(e) {
  assertTrue(e instanceof TypeError);
}
