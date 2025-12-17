;

let test;
print(() => {
  test = wasmEvalBinary(moduleWithSections([
    sigSection([
      { args: [], ret: [] },
    ]),
    declSection([
      0,
    ]),
    exportSection([
      { funcIndex: 0, name: "test" },
    ]),
    bodySection([
      funcBody({ locals: [], body: [
        UnreachableCode
      ] }),
    ]),

    
    
    
    nameSection([
      funcNameSubsection([
        { name: "1234567", nameLen: 8 }, 
      ], 11), 
    ]),

    
    
    customSection("extra"),
  ])).exports.test;
}, /in the 'name' custom section: 1 bytes consumed past the end/);

try {
  test();
} catch (e) {
  print(e.stack);
  print(e.stack.includes("1234567"), false);
}
