function foo(F) {
  return new F();
}

with ({}) {}

class C {
  constructor() {
    this.newTarget = new.target;
  }
}
class C1 extends C {}
class C2 extends C {}
class C3 extends C {}
let C4 = C3.bind({});
let C5 = C3.bind({}, 1);

for (var i = 0; i < 500; i++) {
  print(foo(C1).newTarget, C1);
  print(foo(C2).newTarget, C2);
  print(foo(C3).newTarget, C3);
  print(foo(C4).newTarget, C3);
  print(foo(C5).newTarget, C3);
}
