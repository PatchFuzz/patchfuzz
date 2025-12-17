let key = 5;

class Base {
  constructor() {
    return new Proxy(this, {
      defineProperty(target, key, desc) {
        return Reflect.defineProperty(target, key, desc);
      }
    });
  }
}

class Child extends Base {
  [key] = "basic";
}
let c = new Child();
c = new Child();
