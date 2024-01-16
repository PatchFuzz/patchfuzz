

load(libdir + "pretenure.js");

setupPretenureTest();

allocateArrays(nurseryCount, true);  

let { minor, major } = runTestAndCountCollections(
  () => allocateArrays(tenuredCount, true)
);



print(`${minor} minor GCs, ${major} major GCs`);
assertEq(minor <= 1, true);
assertEq(major >= 5, true);
