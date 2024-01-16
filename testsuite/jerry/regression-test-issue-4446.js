













class Base {
  constructor() {
      return new Proxy(this, {
          defineProperty(target, p, desc) {
              return Reflect.defineProperty(target, p, desc);
          }
      });
  }
}

let computedKey = "test";
class BasicTPK extends Base {
  [computedKey] = "basic";
}

let instance = new BasicTPK;
assert(instance instanceof BasicTPK);
