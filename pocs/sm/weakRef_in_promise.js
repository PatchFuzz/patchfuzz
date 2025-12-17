let wr;
{
  let obj = {};
  wr = new WeakRef(obj);
  obj = null;
}


gc();

print(undefined == wr.deref(), false);
Promise.resolve().then(() => {
  print(undefined == wr.deref(), false);
});

