var proto = Object.getPrototypeOf(new Proxy(Object.create(null), {
  getPrototypeOf(target) {
    return Reflect.getPrototypeOf(target);
  }
} ));

print(proto, null);
