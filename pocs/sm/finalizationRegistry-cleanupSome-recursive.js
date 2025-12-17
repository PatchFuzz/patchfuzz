unsetgczeal("CheckHeapBeforeMinorGC");




let state = 0;

let registry = new FinalizationRegistry(x => {
  if (state === 0) {
    state = 1;
    try {
      registry.cleanupSome();
    } catch (e) {
      
      return;
    } finally {
      state = 2;
    }
    throw new Error("expected stack overflow error");
  }

  if (state === 1) {
    registry.cleanupSome();
  }
});


var stackSize = 0;
function findStackSize(i) {
  try {
    stackSize = i;
    findStackSize(i + 1);
  } catch (e) {
    return;
  }
}
findStackSize(0);


const exceedStackDepthLimit = stackSize * 5;

let values = [];
for (let i = 0; i < exceedStackDepthLimit; ++i) {
  let v = {};
  registry.register(v, i);
  values.push(v);
}
values.length = 0;

gc();
drainJobQueue();
