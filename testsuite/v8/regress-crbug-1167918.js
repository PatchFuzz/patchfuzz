



class A {
}
class B extends A {
  m() {
    let o = {
      m2() {
      }
    };
    () => { super.x; }
  }
}
let b = new B();
b.m();
