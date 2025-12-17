;

setupPretenureTest();



allocateArrays(nurseryCount, false);
let { minor, major } = runTestAndCountCollections(
  () => allocateArrays(tenuredCount, false)
);

print(`${minor} minor GCs, ${major} major GCs`);
print(minor >= 5, true);
print(major == 0, true);



allocateArrays(tenuredCount, true);
({ minor, major } = runTestAndCountCollections(
  () => allocateArrays(tenuredCount * 5, true)
));

print(`${minor} minor GCs, ${major} major GCs`);
print(minor <= 1, true);
print(major >= 5, true);
