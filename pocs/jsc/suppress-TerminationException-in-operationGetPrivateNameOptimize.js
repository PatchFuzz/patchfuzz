class Foo {
  #x;
  constructor() {
    gc();
    try {
      Object.#x();
    } catch (e) {
    }
  }
}

while(1) {
  new Foo();
}
