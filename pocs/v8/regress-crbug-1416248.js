class foo {
  get [Symbol.toStringTag]() {
    return "foo";
  }
}
let o = new foo();
print('[object foo]', o.toString());
