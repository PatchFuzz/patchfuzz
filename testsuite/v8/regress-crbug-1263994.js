



function main() {
  
  
  if (typeof WebAssembly === 'undefined') return;

  Object.defineProperty(Promise, Symbol.species, {
    value: function (f) {
      f(() => { throw 111}, () => { throw 222});
    }
  });
  const promise = WebAssembly.instantiate(new ArrayBuffer(0x10));
  promise.then();
}
main();
