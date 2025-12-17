setJitCompilerOption("inlining.bytecode-max-length", 200);

function escape() { with ({}) {} }

class Foo {
  constructor(i) {
    this.value = i;
  }
}

class Bar extends Foo {
  constructor(n, ...args) {
    escape(args);
    super(...args);
  }
}


print(isSmallFunction(Bar), true);

class Baz extends Bar {
  constructor(a, n) {
    super(n, n);
  }
}

var sum = 0;
for (var i = 0; i < 10000; i++) {
  let obj = new Baz(0, 1);
  sum += obj.value;
}
print(sum, 10000);
