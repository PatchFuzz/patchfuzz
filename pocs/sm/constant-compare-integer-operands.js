;

function makeConstantCompareFn(val, op) {
  return new Function('val', `return val ${op} ${val};`);
}

{
  function testConstantCompareFn(fn, i, expectedOnSuccess) {
    
    print(fn(i), expectedOnSuccess);
    print(fn(i + 1), !expectedOnSuccess);
    print(fn(i - 1), !expectedOnSuccess);

    
    print(fn(i + 0.5), !expectedOnSuccess);
    print(fn(i - 0.5), !expectedOnSuccess);

    
    print(fn(String(i)), !expectedOnSuccess);
    print(fn(String(i + 1)), !expectedOnSuccess);
    print(fn(String(i - 1)), !expectedOnSuccess);

    
    print(fn(true), !expectedOnSuccess);
    print(fn(false), !expectedOnSuccess);

    
    print(fn(null), !expectedOnSuccess);

    
    print(fn(undefined), !expectedOnSuccess);

    
    print(fn(NaN), !expectedOnSuccess);

    
    print(fn(Infinity), !expectedOnSuccess);
    print(fn(-Infinity), !expectedOnSuccess);

    
    print(fn({}), !expectedOnSuccess);
    print(fn([]), !expectedOnSuccess);

    if (i === 0) {
      
      print(fn(+0), expectedOnSuccess);
      print(fn(-0), expectedOnSuccess);
      print(fn(0.0), expectedOnSuccess);
      print(fn(-0.0), expectedOnSuccess);
    }

    
    print(fn(9007199254740992), !expectedOnSuccess);
    print(fn(-9007199254740993), !expectedOnSuccess);

    
    print(fn(BigInt(i)), !expectedOnSuccess);
    print(fn(BigInt(i + 1)), !expectedOnSuccess);
    print(fn(BigInt(i - 1)), !expectedOnSuccess);
  }

  
  for (let i = -128; i <= 127; i++) {
    const fnEq = makeConstantCompareFn(i, '===');
    const fnNe = makeConstantCompareFn(i, '!==');

    testConstantCompareFn(fnEq, i, true);
    testConstantCompareFn(fnNe, i, false);
  }
}
