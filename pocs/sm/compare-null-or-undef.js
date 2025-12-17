function test(xs) {
  for (let i = 0; i < 200; ++i) {
    let x = xs[i % xs.length];

    

    
    print(x < nullOrUndef, (+x) < (+nullOrUndef));
    print(x <= nullOrUndef, (+x) <= (+nullOrUndef));
    print(x >= nullOrUndef, (+x) >= (+nullOrUndef));
    print(x > nullOrUndef, (+x) > (+nullOrUndef));

    
    print(nullOrUndef < x, (+nullOrUndef) < (+x));
    print(nullOrUndef <= x, (+nullOrUndef) <= (+x));
    print(nullOrUndef >= x, (+nullOrUndef) >= (+x));
    print(nullOrUndef > x, (+nullOrUndef) > (+x));
  }
}

function runTest(inputs) {
  let fNull = Function(`return ${test}`.replaceAll("nullOrUndef", "null"))();
  fNull(inputs);

  let fUndefined = Function(`return ${test}`.replaceAll("nullOrUndef", "undefined"))();
  fUndefined(inputs);
}


runTest([
  null,
]);


runTest([
  undefined,
]);


runTest([
  null,
  undefined,
]);


runTest([
  -0x8000_0000,
  -0x7fff_ffff,
  -0x7fff_fffe,
  -2,
  -1,
  0,
  1,
  2,
  0x7fff_fffe,
  0x7fff_ffff,
]);


runTest([
  Number.NEGATIVE_INFINITY,
  -Number.MAX_VALUE,
  Number.MIN_SAFE_INTEGER,
  -1.5,
  -0.5,
  -Number.EPSILON,
  -Number.MIN_VALUE,
  -0,
  0,
  Number.MIN_VALUE,
  Number.EPSILON,
  0.5,
  1.5,
  Number.MAX_SAFE_INTEGER,
  Number.MAX_VALUE,
  Number.POSITIVE_INFINITY,
  NaN,
]);


runTest([
  true, false,
]);


runTest([
  "",
  "0", "-0", "0.0", "0e100",
  "1", "1.5", "-1234", "-1e0",
  "Infinity", "NaN", "not-a-number",
]);
