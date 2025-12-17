function test() {
  
  newGlobal().evaluate(`
    print(getFuseState().OptimizeArraySpeciesFuse.intact, true);
    let p = Array.prototype.constructor;
    Array.prototype.constructor = p;
    print(getFuseState().OptimizeArraySpeciesFuse.intact, true);
    Array.prototype.constructor = Object;
    print(getFuseState().OptimizeArraySpeciesFuse.intact, false);
  `);

  
  newGlobal().evaluate(`
    print(getFuseState().OptimizeArraySpeciesFuse.intact, true);
    delete Array[Symbol.species];
    print(getFuseState().OptimizeArraySpeciesFuse.intact, false);
  `);

  print(getUseCounterResults().OptimizeArraySpeciesFuse, 2);
}
test();
