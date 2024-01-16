

function allocObj() { return {}; }

let wr;
{
  let obj = allocObj();
  wr = new WeakRef(obj);
}

assertEq(wr.deref() !== undefined, true);

clearKeptObjects();
gc();

assertEq(wr.deref(), undefined);
