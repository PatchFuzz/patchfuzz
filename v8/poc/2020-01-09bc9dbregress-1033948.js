



const desc = {
  get mutable() {
    throw "foo";
  },
  get value() {
    console.trace();
  }
};
printEquals(() => new WebAssembly.Global(desc), "foo");
