function main() {
  class A {}
  A.prototype.prototype = 'a string';
  class C extends A {
    m() {
      super.prototype;
    }
  }
  function f() {}

  
  C.prototype.m.call(f);
  
  C.prototype.m.call('not a function');
}

for (let i = 0; i < 100; ++i) {
  main();
}
