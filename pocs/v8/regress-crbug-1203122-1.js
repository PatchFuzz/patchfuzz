function main() {
  class C {
    m() {
      super.prototype;
    }
  }
  
  function f() {}
  C.prototype.__proto__ = f;

  let c = new C();

  f.prototype;
  c.m();
}

for (let i = 0; i < 100; ++i) {
  main();
}
