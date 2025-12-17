function bar() {
  foo.arguments.length = 10;
}

function foo(x) {
  var a = arguments;
  var n = 0;
  bar();
  print(x, 5);
  print(a.length, 1);
}

foo(5);
