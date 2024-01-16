


load(libdir + "pretenure.js");

setupPretenureTest();



allocateArrays(nurseryCount, false);
let { minor, major } = runTestAndCountCollections(
  () => allocateArrays(tenuredCount, false)
);

print(`${minor} minor GCs, ${major} major GCs`);
assertEq(minor >= 5, true);
assertEq(major == 0, true);



allocateArrays(tenuredCount, true);
({ minor, major } = runTestAndCountCollections(
  () => allocateArrays(tenuredCount * 5, true)
));

print(`${minor} minor GCs, ${major} major GCs`);
assertEq(minor <= 1, true);
assertEq(major >= 5, true);
