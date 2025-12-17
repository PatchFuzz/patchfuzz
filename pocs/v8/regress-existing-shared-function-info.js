function f() {
  return function g() {
    return function h() {}
  }
}

var h = f()();


for (var i of Array(10)) gc();

f()();
