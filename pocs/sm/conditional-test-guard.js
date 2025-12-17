function f(x) {
    return (+(x || 1) ? 0 : x);
}


with ({});

for (let i = 0; i < 100; ++i) {
  print(f(), 0);
}

print(f("not-a-number"), "not-a-number");
