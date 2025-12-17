function foo(a) {
  return a + 42;
}

for (let i = 0; i < 1e3; ++i) {
  for (let j = -50; j < 50; ++j) {
    let x = foo(2147483647 + j);
    if (x !== 2147483689 + j) throw "Error";
  }
}
