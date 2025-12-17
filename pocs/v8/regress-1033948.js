const desc = {
  get mutable() {
    throw "foo";
  },
  get value() {
    console.trace();
  }
};
print(() => new WebAssembly.Global(desc), "foo");
