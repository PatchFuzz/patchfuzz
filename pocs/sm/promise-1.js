newGlobal().evaluate(`
  print(getFuseState().OptimizePromiseLookupFuse.intact, true);
  let v = Promise.prototype.constructor;
  Promise.prototype.constructor = v;
  print(getFuseState().OptimizePromiseLookupFuse.intact, true);
  Promise.prototype.constructor = {};
  print(getFuseState().OptimizePromiseLookupFuse.intact, false);
`);


newGlobal().evaluate(`
  print(getFuseState().OptimizePromiseLookupFuse.intact, true);
  let v = Promise.prototype.then;
  Promise.prototype.then = v;
  print(getFuseState().OptimizePromiseLookupFuse.intact, true);
  Promise.prototype.then = x => x;
  print(getFuseState().OptimizePromiseLookupFuse.intact, false);
`);


newGlobal().evaluate(`
  print(getFuseState().OptimizePromiseLookupFuse.intact, true);
  let v = Promise.resolve;
  Promise.resolve = v;
  print(getFuseState().OptimizePromiseLookupFuse.intact, true);
  delete Promise.resolve;
  print(getFuseState().OptimizePromiseLookupFuse.intact, false);
`);


newGlobal().evaluate(`
  print(getFuseState().OptimizePromiseLookupFuse.intact, true);
  Object.defineProperty(Promise, Symbol.species, {});
  print(getFuseState().OptimizePromiseLookupFuse.intact, true);
  Object.defineProperty(Promise, Symbol.species, {value: null});
  print(getFuseState().OptimizePromiseLookupFuse.intact, false);
`);

print(getUseCounterResults().OptimizePromiseLookupFuse, 4);
