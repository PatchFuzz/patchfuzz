let bigInts = [
  
  -(2n ** 1000n),

  
  -1n,
  0n,
  1n,

  
  2n ** 1000n,
];

function test() {
  for (var i = 0; i < 100; ++i) {
    let lhs = LHS;
    let rhs = RHS;

    print(lhs === rhs, EQUALS);
    print(rhs === lhs, EQUALS);

    print(lhs !== rhs, !EQUALS);
    print(rhs !== lhs, !EQUALS);

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
  for (let rhs of bigInts) {
    let equals = lhs == rhs;
    let lessThan = lhs < rhs;
    let fn = Function(
      `return ${test}`
      .replaceAll("LHS", `${lhs}n`)
      .replaceAll("RHS", `${rhs}n`)
      .replaceAll("EQUALS", `${equals}`)
      .replaceAll("LESS_THAN", `${lessThan}`)
    )();
    fn();
  }
}
