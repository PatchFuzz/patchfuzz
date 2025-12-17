function f(a, ...rest) {
  return rest.length;
}

with ({});

for (let i = 0; i < 1000; ++i) {
  print(f(), 0);
}
