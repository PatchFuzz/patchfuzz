function foo() {}

for (let i = 0; i < testLoopCount; i++) {
  class C extends foo {
    constructor() {
      super();
      super.p += 0;
    }
  };
  new C();
}
