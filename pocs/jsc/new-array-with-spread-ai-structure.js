const a = new Int8Array(4);
a[3];
function opt() {
  const arr = [...[1, 2, 3]];
  const func = arr?.constructor;
  try {
    new func(arr); 
    describe(1234)
  } catch (e) {
    throw e;
  }
  for (let i = 0; i < 100; i++) {}
}
for (let i = 0; i < 5; i++) {
  opt();
}
