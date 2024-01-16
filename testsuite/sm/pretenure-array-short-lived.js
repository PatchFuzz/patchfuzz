

load(libdir + "pretenure.js");

setupPretenureTest();

allocateArrays(nurseryCount, false);  

let { minor, major } = runTestAndCountCollections(
  () => allocateArrays(nurseryCount * 5, false)
);


print(`${minor} minor GCs, ${major} major GCs`);
assertEq(minor >= 5, true);
assertEq(major == 0, true);
