





let speciesCounter = 0;

Object.defineProperty(Promise, Symbol.species, {
  value: function(...args) {
    speciesCounter++;
    return new Promise(...args);
  }
});

async function foo() { }

assertPromiseResult(Promise.all([foo()]), () => {
  assertEquals(3, speciesCounter);
});
