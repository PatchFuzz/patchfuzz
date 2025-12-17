function generateObjectLiteral(propCount, computedPropCount) {
  const parts = [];

  for (let i = 0; i < propCount; i++) {
    parts.push(`prop${i}: ${i}`);
  }

  for (let i = 0; i < computedPropCount; i++) {
    parts.push(`["computedProp${i}"]: ${i}`);
  }

  return `let obj = {${parts.join(",")}}`;
}

function print(obj, count) {
  print(Object.keys(obj).length === count, true);
}

const objectSizes = [0, 1, 2, 4, 8, 16, 255, 256];


function testComputedProperties() {
  for (let numOfProps of objectSizes) {
    let obj = Function(
      `${generateObjectLiteral(0, numOfProps)}; return obj;`
    ).call();
    print(obj, numOfProps);
  }
}


function testMixedProperties() {
  for (let numOfProps of objectSizes) {
    let obj = Function(
      `${generateObjectLiteral(numOfProps, 1)}; return obj;`
    ).call();
    print(obj, numOfProps + 1);
  }
}


function testNormalProperties() {
  for (let numOfProps of objectSizes) {
    let obj = Function(
      `${generateObjectLiteral(numOfProps, 0)}; return obj;`
    ).call();
    print(obj, numOfProps);
  }
}

testNormalProperties();
testMixedProperties();
testComputedProperties();
