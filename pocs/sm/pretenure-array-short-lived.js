;

setupPretenureTest();

allocateArrays(nurseryCount, false);  

let { minor, major } = runTestAndCountCollections(
  () => allocateArrays(nurseryCount * 5, false)
);


print(`${minor} minor GCs, ${major} major GCs`);
print(minor >= 5, true);
print(major == 0, true);
