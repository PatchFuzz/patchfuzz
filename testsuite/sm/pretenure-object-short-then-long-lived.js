


load(libdir + "pretenure.js");

setupPretenureTest();



allocateObjects(nurseryCount, false);
let { minor, major } = runTestAndCountCollections(
  () => allocateObjects(tenuredCount, false)
);

print(`${minor} minor GCs, ${major} major GCs`);
assertEq(minor >= 5, true);
assertEq(major == 0, true);



allocateObjects(tenuredCount, true);
({ minor, major } = runTestAndCountCollections(
  () => allocateObjects(tenuredCount * 5, true)
));

print(`${minor} minor GCs, ${major} major GCs`);
assertEq(minor <= 1, true);
assertEq(major >= 5, true);
