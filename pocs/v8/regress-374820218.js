Object.defineProperty(Promise, Symbol.species, {value: -13});
print(() => WebAssembly.compileStreaming(), TypeError);
