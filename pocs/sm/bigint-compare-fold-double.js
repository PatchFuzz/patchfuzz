let bigInts = [
  
  -(2n ** 1000n),

  
  -1n,
  0n,
  1n,

  
  2n ** 1000n,
];

let doubles = [
  -Infinity,
  Number.MAX_VALUE,
  -Math.SQRT2,
  -Number.MIN_VALUE,
  -0,
  Number.MIN_VALUE,
  Math.SQRT2,
  Number.MAX_VALUE,
  Infinity,
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
  for (let rhs of doubles) {
    let equals = lhs == rhs;
    let lessThan = lhs < rhs;
    let repr = Object.is(rhs, -0) ? "-0" : String(rhs);
    let fn = Function(
      `return ${test}`
      .replaceAll("LHS", `${lhs}n`)
      .replaceAll("RHS", `${repr}`)
      .replaceAll("EQUALS", `${equals}`)
      .replaceAll("LESS_THAN", `${lessThan}`)
    )();
    fn();
  }
}

function testNaN() {
  for (var i = 0; i < 100; ++i) {
    let lhs = LHS;
    let rhs = NaN;

    print(lhs === rhs, false);
    print(rhs === lhs, false);

    print(lhs !== rhs, true);
    print(rhs !== lhs, true);

    print(lhs == rhs, false);
    print(rhs == lhs, false);

    print(lhs != rhs, true);
    print(rhs != lhs, true);

    print(lhs < rhs, false);
    print(rhs < lhs, false);

    print(lhs <= rhs, false);
    print(rhs <= lhs, false);

    print(lhs > rhs, false);
    print(rhs > lhs, false);

    print(lhs >= rhs, false);
    print(rhs >= lhs, false);
  }
}

for (let lhs of bigInts) {
  let fn = Function(
    `return ${testNaN}`
    .replaceAll("LHS", `${lhs}n`)
  )();
  fn();
}
