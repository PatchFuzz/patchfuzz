let global = newGlobal({newCompartment: true});
global.eval(`
  this.target = {};  
  this.registry = new FinalizationRegistry(() => print(0, 1));
  registry.register(target, 'held');
  this.finalizeObserver = makeFinalizeObserver();
`);

print(finalizeCount(), 0);

global = undefined;
gc();

print(finalizeCount(), 1);
