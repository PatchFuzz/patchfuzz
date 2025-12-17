Object.defineProperty(Object.prototype, "test", {});

class Base {
  constructor() {
    return new Proxy(this, {
      defineProperty(target, key) {
        return true;
      }
    });
  }
}
let key = "test";
class Child extends Base {
  [key] = "basic";
}
let c = new Child();
c = new Child();
