



const desc = {
  get mutable() {
    throw "foo";
  },
  get value() {
    console.trace();
  }
};
assertThrowsEquals(() => new WebAssembly.Global(desc), "foo");
