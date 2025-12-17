let g = newGlobal();

function oomTest() {
  let done = false;
  for (let j = 1; !done; j++) {
    saveStack();

    oomAtAllocation(j);

    try {
      g.saveStack();
    } catch {}

    done = !resetOOMFailure();

    try {
      g.saveStack();
    } catch {}
  }
}

oomTest();
