function h() {
  function f() { return eval; }
  function g() { var x = 44; return eval("x"); }
  print(44, g());
}

h();
