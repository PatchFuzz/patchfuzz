;

async function* f() {
  yield 1;
}

let p = f().next();
print(() => {
  settlePromiseNow(p);
}, Error);

p = f().next();
print(() => {
  resolvePromise(p);
}, Error);

p = f().next();
print(() => {
  rejectPromise(p);
}, Error);
