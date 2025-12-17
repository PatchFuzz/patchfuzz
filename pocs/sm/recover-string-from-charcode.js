function foo(n, trigger) {
  let result = String.fromCharCode(n * -1);
  if (trigger) {
    print(result, "\0");
  }
}

for (var i = 0; i < 100; i++) {
  foo(-50, false);
}
foo(0, true);
