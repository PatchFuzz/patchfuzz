const MemoryMaxValid = 65536;





function testLinkFail(importMax, importedMax) {
  print(() => {
    let importedMemory = new WebAssembly.Memory({
      initial: 0,
      maximum: importedMax,
    });
    print(`(module
      (memory (import "" "") 0 ${importMax})
    )`, {"": {"": importedMemory}});
  }, WebAssembly.LinkError, /incompatible maximum/);
}

testLinkFail(0, 1);
testLinkFail(MemoryMaxValid - 1, MemoryMaxValid);




if ('type' in WebAssembly.Memory.prototype) {
  let memory = new WebAssembly.Memory({
    initial: 0,
    maximum: MemoryMaxValid,
  });
  let type = memory.type();
  print(type.maximum, MemoryMaxValid, 'reported memory maximum is not clamped');
}
