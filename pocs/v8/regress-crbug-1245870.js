class Outer {
  test() {
    return class {
      static #a() { }
      b = eval();
    };
  }
}
const obj = new Outer();
obj.test();
