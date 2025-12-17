function foo(f, a, b) {
  return f(a, b);
}

function bar(a, b) {
  let result = a + b;
  if (result >= fns.length) {
    return b + a;
  }
  return result;
}

function baz(a, b) {
  return a + b;
}

let fns = [];













for (let i = 0; i < 2000; i++) {
  fns.push(bar);
}

fns.push(baz);
fns.push(bar);

for (let i = 0; i < fns.length; i++) {
  print(foo(fns[i], i, 1), i + 1);
}
