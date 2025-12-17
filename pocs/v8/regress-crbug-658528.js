function f() {
  eval("var x = 1");
  const x = 2;
}

print(f, SyntaxError);
