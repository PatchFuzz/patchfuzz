



function test(obj) {
  class Base {
    constructor() {
      return obj;
    }
  }
  class C extends Base {
    #x = 1;
  }

  let c = new C();
  c = new C();
}

assertThrows(
    () => test(globalThis),
    TypeError, "Cannot initialize #x twice on the same object");

assertThrows(
    () => test(Object.create(null)),
    TypeError, "Cannot initialize #x twice on the same object");
