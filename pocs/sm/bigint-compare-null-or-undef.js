function test(xs) {
  for (let i = 0; i < 200; ++i) {
    let x = xs[i % xs.length];

    

    
    print(x < nullOrUndef, x < (+nullOrUndef));
    print(x <= nullOrUndef, x <= (+nullOrUndef));
    print(x >= nullOrUndef, x >= (+nullOrUndef));
    print(x > nullOrUndef, x > (+nullOrUndef));

    
    print(nullOrUndef < x, (+nullOrUndef) < x);
    print(nullOrUndef <= x, (+nullOrUndef) <= x);
    print(nullOrUndef >= x, (+nullOrUndef) >= x);
    print(nullOrUndef > x, (+nullOrUndef) > x);
  }
}

function runTest(inputs) {
  let fNull = Function(`return ${test}`.replaceAll("nullOrUndef", "null"))();
  fNull(inputs);

  let fUndefined = Function(`return ${test}`.replaceAll("nullOrUndef", "undefined"))();
  fUndefined(inputs);
}


runTest([
  
  -(2n ** 1000n),

  
  -18446744073709551617n,
  -18446744073709551616n,
  -18446744073709551615n,

  
  -9223372036854775809n,
  -9223372036854775808n,
  -9223372036854775807n,

  
  -4294967297n,
  -4294967296n,
  -4294967295n,

  
  -2147483649n,
  -2147483648n,
  -2147483647n,

  -1n,
  0n,
  1n,

  
  2147483647n,
  2147483648n,
  2147483649n,

  
  4294967295n,
  4294967296n,
  4294967297n,

  
  9223372036854775807n,
  9223372036854775808n,
  9223372036854775809n,

  
  18446744073709551615n,
  18446744073709551616n,
  18446744073709551617n,

  
  2n ** 1000n,
]);
