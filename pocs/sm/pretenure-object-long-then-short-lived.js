;

setupPretenureTest();



allocateObjects(nurseryCount, true);
let { minor, major } = runTestAndCountCollections(
  () => allocateObjects(tenuredCount, true)
);

print(`${minor} minor GCs, ${major} major GCs`);
print(minor <= 1, true);
print(major >= 5, true);



allocateObjects(tenuredCount, false);
({ minor, major } = runTestAndCountCollections(
  () => allocateObjects(nurseryCount * 5, false)
));

print(`${minor} minor GCs, ${major} major GCs`);
print(minor >= 5, true);
print(major == 0, true);
