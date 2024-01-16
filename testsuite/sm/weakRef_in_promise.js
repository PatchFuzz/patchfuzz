


let wr;
{
  let obj = {};
  wr = new WeakRef(obj);
  obj = null;
}


gc();

assertEq(undefined == wr.deref(), false);
Promise.resolve().then(() => {
  assertEq(undefined == wr.deref(), false);
});

