let speciesCounter = 0;

Object.defineProperty(Promise, Symbol.species, {
  value: function(...args) {
    speciesCounter++;
    return new Promise(...args);
  }
});

async function foo() { }

print(Promise.all([foo()]), () => {
  print(3, speciesCounter);
});
