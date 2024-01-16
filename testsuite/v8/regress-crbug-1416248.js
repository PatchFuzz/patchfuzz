



class foo {
  get [Symbol.toStringTag]() {
    return "foo";
  }
}
let o = new foo();
assertEquals('[object foo]', o.toString());
