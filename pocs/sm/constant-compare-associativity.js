;

function testConstantCompareIsLeftAssociative(intVal, boolVal) {
  return 1 === intVal === boolVal;
}

print(testConstantCompareIsLeftAssociative(1, true), true);
print(testConstantCompareIsLeftAssociative(1, false), false);
print(testConstantCompareIsLeftAssociative(0, true), false);
print(testConstantCompareIsLeftAssociative(0, false), true);

function testConstantCompareMixedLeftAssociative(intVal, boolVal) {
  return 1 !== intVal === true !== boolVal;
}

print(testConstantCompareMixedLeftAssociative(1, true), true);
print(testConstantCompareMixedLeftAssociative(1, false), false);
print(testConstantCompareMixedLeftAssociative(0, true), false);
print(testConstantCompareMixedLeftAssociative(0, false), true);
