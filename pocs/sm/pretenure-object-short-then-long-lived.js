;

setupPretenureTest();



allocateObjects(nurseryCount, false);
let { minor, major } = runTestAndCountCollections(
  () => allocateObjects(tenuredCount, false)
);

print(`${minor} minor GCs, ${major} major GCs`);
print(minor >= 5, true);
print(major == 0, true);



allocateObjects(tenuredCount, true);
({ minor, major } = runTestAndCountCollections(
  () => allocateObjects(tenuredCount * 5, true)
));

print(`${minor} minor GCs, ${major} major GCs`);
print(minor <= 1, true);
print(major >= 5, true);
