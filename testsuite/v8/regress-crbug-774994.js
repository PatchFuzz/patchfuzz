





function f() {
  new class extends Object {
    constructor() {
      eval("super(); super.__f_10();");
    }
  }
}
assertThrows(f, TypeError);

function g() {
  let obj = {
    m() {
      eval("super.foo()");
    }
  }
  obj.m();
}
assertThrows(g, TypeError);

function h() {
  let obj = {
    get m() {
      eval("super.foo()");
    }
  }
  obj.m;
}
assertThrows(h, TypeError);
