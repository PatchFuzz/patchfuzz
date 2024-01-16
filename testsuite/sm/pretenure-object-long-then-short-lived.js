


load(libdir + "pretenure.js");

setupPretenureTest();



allocateObjects(nurseryCount, true);
let { minor, major } = runTestAndCountCollections(
  () => allocateObjects(tenuredCount, true)
);

print(`${minor} minor GCs, ${major} major GCs`);
assertEq(minor <= 1, true);
assertEq(major >= 5, true);



allocateObjects(tenuredCount, false);
({ minor, major } = runTestAndCountCollections(
  () => allocateObjects(nurseryCount * 5, false)
));

print(`${minor} minor GCs, ${major} major GCs`);
assertEq(minor >= 5, true);
assertEq(major == 0, true);
