;




print(() => {
  var promise = new Promise(resolve => {
    resolve(10);
  });
  settlePromiseNow(promise);
}, Error);


print(() => {
  var promise = new Promise((_, reject) => {
    reject(10);
  });
  settlePromiseNow(promise);
}, Error);

print(() => {
  var promise = new Promise(() => {
    throw 10;
  });
  settlePromiseNow(promise);
}, Error);
