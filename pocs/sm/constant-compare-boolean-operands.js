;

function makeConstantCompareFn(val, op) {
  return new Function('val', `return val ${op} ${val};`);
}

{
  function testBooleanConstantCompareFn(fn, i, expectedOnSuccess) {
    print(fn(i), expectedOnSuccess);
    print(fn(!i), !expectedOnSuccess);

    
    print(fn(0.5), !expectedOnSuccess);
    print(fn(-0.5), !expectedOnSuccess);

    
    print(fn(String(i)), !expectedOnSuccess);
    print(fn(String(!i)), !expectedOnSuccess);

    
    print(fn(1), !expectedOnSuccess);
    print(fn(0), !expectedOnSuccess);
    print(fn(-1), !expectedOnSuccess);

    
    print(fn(BigInt(1)), !expectedOnSuccess);

    
    print(fn(NaN), !expectedOnSuccess);

    
    print(fn(Infinity), !expectedOnSuccess);
    print(fn(-Infinity), !expectedOnSuccess);

    
    print(fn(undefined), !expectedOnSuccess);

    
    print(fn(null), !expectedOnSuccess);

    
    print(fn({}), !expectedOnSuccess);
    print(fn([]), !expectedOnSuccess);
  }

  testBooleanConstantCompareFn(makeConstantCompareFn(true, '==='), true, true);
  testBooleanConstantCompareFn(makeConstantCompareFn(true, '!=='), true, false);
}
