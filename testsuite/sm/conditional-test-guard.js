function f(x) {
    return (+(x || 1) ? 0 : x);
}


with ({});

for (let i = 0; i < 100; ++i) {
  assertEq(f(), 0);
}

assertEq(f("not-a-number"), "not-a-number");
