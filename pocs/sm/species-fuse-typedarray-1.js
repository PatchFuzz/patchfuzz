var TypedArrays = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  BigInt64Array,
  BigUint64Array,
  Float16Array,
  Float32Array,
  Float64Array,
];

function test() {
  
  newGlobal().evaluate(`
    print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, true);
    const TypedArray = Object.getPrototypeOf(Int8Array);
    let p = TypedArray.prototype.constructor;
    TypedArray.prototype.constructor = p;
    print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, true);
    TypedArray.prototype.constructor = Object;
    print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, false);
  `);

  
  newGlobal().evaluate(`
    print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, true);
    const TypedArray = Object.getPrototypeOf(Int8Array);
    delete TypedArray[Symbol.species];
    print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, false);
  `);

  
  for (var TA of TypedArrays) {
    newGlobal().evaluate(`
      print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, true);
      let p = ${TA.name}.prototype.constructor;
      ${TA.name}.prototype.constructor = p;
      print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, true);
      ${TA.name}.prototype.constructor = Object;
      print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, false);
    `);
  }

  
  for (var TA of TypedArrays) {
    newGlobal().evaluate(`
      print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, true);
      let p = Object.getPrototypeOf(${TA.name}.prototype);
      Object.setPrototypeOf(${TA.name}.prototype, p);
      print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, true);
      Object.setPrototypeOf(${TA.name}.prototype, Object);
      print(getFuseState().OptimizeTypedArraySpeciesFuse.intact, false);
    `);
  }
}
test();
