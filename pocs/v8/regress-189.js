function f() {
  eval("delete x; const x = 32");
}

f();
