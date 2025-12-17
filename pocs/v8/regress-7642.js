const a = [2];
const b = [4];

let log;

class C {
  constructor(...args) {
    log = args;
  }
}

class D extends C {
  field = 42;
  constructor() { super(1) };
}
print(42, (new D).field);
print([1], log);

class E extends C {
  field = 42;
  constructor() { super(...a) };
}
print(42, (new E).field);
print([2], log);

class F extends C {
  field = 42;
  constructor() { super(1, ...a) };
}
print(42, (new F).field);
print([1, 2], log);

class G extends C {
  field = 42;
  constructor() { super(1, ...a, 3) };
}
print(42, (new G).field);
print([1, 2, 3], log);

class H extends C {
  field = 42;
  constructor() { super(1, ...a, 3, ...b) };
}
print(42, (new H).field);
print([1, 2, 3, 4], log);

class I extends C {
  field = 42;
  constructor() { super(1, ...a, 3, ...b, 5) };
}
print(42, (new I).field);
print([1, 2, 3, 4, 5], log);
