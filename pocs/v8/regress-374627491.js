class B { }
class C extends B {
  constructor() {
    let x = 0;
    switch (0) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        x += this;
        break;
      case this:
    }
  }
}
print(() => { new C(); }, ReferenceError);
