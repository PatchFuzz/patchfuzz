const tests = [
  [-0x80000000n, 0x7fffffffn],
  [-0x7fffffffn, 0x7ffffffen],
  [-0x7ffffffen, 0x7ffffffdn],
  [-2n, 1n],
  [-1n, 0n],
  [0n, -1n],
  [1n, -2n],
  [2n, -3n],
  [0x7ffffffen, -0x7fffffffn],
  [0x7fffffffn, -0x80000000n],
];

function f(tests) {
  for (let test of tests) {
    let input = test[0], expected = test[1];
    print(BigInt.asIntN(32, input), input);
    print(BigInt.asIntN(32, expected), expected);

    let f = Function(`
      let input = ${input}n;
      print(~input, ${expected}n);
    `);

    for (let j = 0; j < 100; ++j) {
      f();
    }
  }
}

f(tests);
