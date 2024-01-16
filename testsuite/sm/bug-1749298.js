


let global = newGlobal({newCompartment: true});
global.eval(`
  this.target = {};  
  this.registry = new FinalizationRegistry(() => assertEq(0, 1));
  registry.register(target, 'held');
  this.finalizeObserver = makeFinalizeObserver();
`);

assertEq(finalizeCount(), 0);

global = undefined;
gc();

assertEq(finalizeCount(), 1);
