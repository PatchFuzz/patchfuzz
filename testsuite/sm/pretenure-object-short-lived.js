

load(libdir + "pretenure.js");

setupPretenureTest();

allocateObjects(nurseryCount, false);  

let { minor, major } = runTestAndCountCollections(
  () => allocateObjects(nurseryCount * 5, false)
);


print(`${minor} minor GCs, ${major} major GCs`);
assertEq(minor >= 5, true);
assertEq(major == 0, true);
