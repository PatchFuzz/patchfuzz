

assertEq(isSmallFunction(isFinite), true);
assertEq(isSmallFunction(isNaN), true);

assertEq(isSmallFunction(Number.isFinite), true);
assertEq(isSmallFunction(Number.isNaN), true);

assertEq(isSmallFunction(Number.isInteger), true);
assertEq(isSmallFunction(Number.isSafeInteger), true);
