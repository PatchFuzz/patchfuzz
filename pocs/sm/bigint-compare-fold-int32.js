let bigInts = [
  
  -(2n ** 1000n),

  
  -1n,
  0n,
  1n,

  
  2n ** 1000n,
];

let int32s = [
  -0x8000_0000,
  -1,
  0,
  1,
  0x7fff_ffff,
];

function test() {
  for (var i = 0; i < 100; ++i) {
    let lhs = LHS;
    let rhs = RHS;

    print(lhs === rhs, false);
    print(rhs === lhs, false);

    print(lhs !== rhs, true);
    print(rhs !== lhs, true);

    print(lhs == rhs, EQUALS);
    print(rhs == lhs, EQUALS);

    print(lhs != rhs, !EQUALS);
    print(rhs != lhs, !EQUALS);

    print(lhs < rhs, LESS_THAN);
    print(rhs < lhs, !LESS_THAN && !EQUALS);

    print(lhs <= rhs, LESS_THAN || EQUALS);
    print(rhs <= lhs, !LESS_THAN || EQUALS);

    print(lhs > rhs, !LESS_THAN && !EQUALS);
    print(rhs > lhs, LESS_THAN);

    print(lhs >= rhs, !LESS_THAN || EQUALS);
    print(rhs >= lhs, LESS_THAN || EQUALS);
  }
}

for (let lhs of bigInts) {
  for (let rhs of int32s) {
    
    rhs |= 0;

    let equals = lhs == rhs;
    let lessThan = lhs < rhs;
    let fn = Function(
      `return ${test}`
      .replaceAll("LHS", `${lhs}n`)
      .replaceAll("RHS", `${rhs}`)
      .replaceAll("EQUALS", `${equals}`)
      .replaceAll("LESS_THAN", `${lessThan}`)
    )();
    fn();
  }
}
