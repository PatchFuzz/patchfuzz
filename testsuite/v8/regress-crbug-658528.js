



function f() {
  eval("var x = 1");
  const x = 2;
}

assertThrows(f, SyntaxError);
