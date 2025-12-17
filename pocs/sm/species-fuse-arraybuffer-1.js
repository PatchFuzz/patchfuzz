function test() {
  
  newGlobal().evaluate(`
    print(getFuseState().OptimizeArrayBufferSpeciesFuse.intact, true);
    let p = ArrayBuffer.prototype.constructor;
    ArrayBuffer.prototype.constructor = p;
    print(getFuseState().OptimizeArrayBufferSpeciesFuse.intact, true);
    ArrayBuffer.prototype.constructor = Object;
    print(getFuseState().OptimizeArrayBufferSpeciesFuse.intact, false);
  `);

  
  newGlobal().evaluate(`
    print(getFuseState().OptimizeArrayBufferSpeciesFuse.intact, true);
    delete ArrayBuffer[Symbol.species];
    print(getFuseState().OptimizeArrayBufferSpeciesFuse.intact, false);
  `);
}
test();
