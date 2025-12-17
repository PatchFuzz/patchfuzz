;

setupPretenureTest();

allocateArrays(nurseryCount, true);  

let { minor, major } = runTestAndCountCollections(
  () => allocateArrays(tenuredCount, true)
);



print(`${minor} minor GCs, ${major} major GCs`);
print(minor <= 1, true);
print(major >= 5, true);
