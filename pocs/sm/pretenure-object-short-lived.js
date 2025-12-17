;

setupPretenureTest();

allocateObjects(nurseryCount, false);  

let { minor, major } = runTestAndCountCollections(
  () => allocateObjects(nurseryCount * 5, false)
);


print(`${minor} minor GCs, ${major} major GCs`);
print(minor >= 5, true);
print(major == 0, true);
