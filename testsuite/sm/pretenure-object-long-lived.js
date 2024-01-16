

load(libdir + "pretenure.js");

setupPretenureTest();

allocateObjects(nurseryCount, true);  

let { minor, major } = runTestAndCountCollections(
  () => allocateObjects(tenuredCount, true)
);



print(`${minor} minor GCs, ${major} major GCs`);
assertEq(minor <= 1, true);
assertEq(major >= 5, true);
