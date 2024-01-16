const thisGlobal = this;
const otherGlobalSameCompartment = newGlobal({sameCompartmentAs: thisGlobal});
const otherGlobalNewCompartment = newGlobal({newCompartment: true});

const globals = [thisGlobal, otherGlobalSameCompartment, otherGlobalNewCompartment];

function testProperties(global, count) {
  let {object: source, transplant} = transplantableObject();

  
  
  for (let i = 0; i < count; i++) {
    source["foo" + i] = i;
  }

  
  transplant(global);

  
  for (let i = 0; i < count; i++) {
    assertEq(source["foo" + i], i);
  }
}

for (let global of globals) {
  for (let count of [0, 10, 30]) {
    testProperties(global, count);
  }
}
