function foo() {
  let obj = {a: 1};
  if (Object.keys(obj).length == 0) {}
  delete obj.a;
  print(Object.keys(obj).length, 0);
}

with ({}) {}
for (var i = 0; i < 10000; i++) {
  foo();
}

