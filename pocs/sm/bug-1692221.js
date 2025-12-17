function allocateGarbage() {
  gc();
  for (let j = 0; j < 100000; j++) {
    Symbol();
  }
}

function collectUntilDecommit() {
  startgc(1);
  while (gcstate() != "NotActive" && gcstate() != "Decommit") {
    gcslice(1000);
  }
}

function triggerSyncDecommit() {
  reportLargeAllocationFailure(1);
}

gczeal(0);



gcparam("highFrequencyTimeLimit", 0);

allocateGarbage();
collectUntilDecommit();
triggerSyncDecommit();

allocateGarbage();
collectUntilDecommit();
oomAtAllocation(10);
triggerSyncDecommit();
resetOOMFailure();
