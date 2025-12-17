function test() {
  
  newGlobal().evaluate(`
    print(getFuseState().OptimizeSharedArrayBufferSpeciesFuse.intact, true);
    let p = SharedArrayBuffer.prototype.constructor;
    SharedArrayBuffer.prototype.constructor = p;
    print(getFuseState().OptimizeSharedArrayBufferSpeciesFuse.intact, true);
    SharedArrayBuffer.prototype.constructor = Object;
    print(getFuseState().OptimizeSharedArrayBufferSpeciesFuse.intact, false);
  `);

  
  newGlobal().evaluate(`
    print(getFuseState().OptimizeSharedArrayBufferSpeciesFuse.intact, true);
    delete SharedArrayBuffer[Symbol.species];
    print(getFuseState().OptimizeSharedArrayBufferSpeciesFuse.intact, false);
  `);
}
test();
