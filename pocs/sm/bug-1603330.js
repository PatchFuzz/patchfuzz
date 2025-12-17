function allocObj() { return {}; }

let wr;
{
  let obj = allocObj();
  wr = new WeakRef(obj);
}

print(wr.deref() !== undefined, true);

clearKeptObjects();
gc();

print(wr.deref(), undefined);
