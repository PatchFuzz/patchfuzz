

function foo(x) {
  if (x > 0n)
    return
}

for (let i = 0; i < 2e5; i++) {
    foo(1);
}
