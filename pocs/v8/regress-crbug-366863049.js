class A {
  constructor() {
    new class B {
      [() => super._proto__] = 1();
    };
  }
};

print(() => new A);
