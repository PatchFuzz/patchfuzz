let slot;

function foo() {
  return function inner(a) {
    slot = +a;
    return 1 / slot;
  }
}

function mk_foo() {
  let f = eval('(' + foo.toString() + ')');
  return f();
}

for (let i = 0; i < 3; i++) {
  let f = mk_foo();
  print(Infinity, f(0));
  print(-Infinity, f(-0));
}
