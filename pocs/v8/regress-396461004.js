Object.defineProperty(Promise, Symbol.species, {'value': () => {}});
print(() => WebAssembly.instantiateStreaming(), TypeError);
