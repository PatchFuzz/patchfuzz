function f() {
  new class extends Object {
    constructor() {
      eval("super(); super.__f_10();");
    }
  }
}
print(f, TypeError);

function g() {
  let obj = {
    m() {
      eval("super.foo()");
    }
  }
  obj.m();
}
print(g, TypeError);

function h() {
  let obj = {
    get m() {
      eval("super.foo()");
    }
  }
  obj.m;
}
print(h, TypeError);
