


load(libdir + "asserts.js");

async function* f() {
  yield 1;
}

let p = f().next();
assertThrowsInstanceOf(() => {
  settlePromiseNow(p);
}, Error);

p = f().next();
assertThrowsInstanceOf(() => {
  resolvePromise(p);
}, Error);

p = f().next();
assertThrowsInstanceOf(() => {
  rejectPromise(p);
}, Error);
