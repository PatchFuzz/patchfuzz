;

setupPretenureTest();



allocateArrays(nurseryCount, true);
let { minor, major } = runTestAndCountCollections(
  () => allocateArrays(tenuredCount, true)
);

print(`${minor} minor GCs, ${major} major GCs`);
print(minor <= 1, true);
print(major >= 5, true);



allocateArrays(tenuredCount, false);
({ minor, major } = runTestAndCountCollections(
  () => allocateArrays(nurseryCount * 5, false)
));

print(`${minor} minor GCs, ${major} major GCs`);
print(minor >= 5, true);
print(major == 0, true);
