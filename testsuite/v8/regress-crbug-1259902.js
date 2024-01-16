





Object.prototype[1] = 153;
Object.freeze(Object.prototype);
class B {
  [1] = 7;
}
let b = new B();
