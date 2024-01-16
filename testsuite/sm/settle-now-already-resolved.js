

load(libdir + "asserts.js");




assertThrowsInstanceOf(() => {
  var promise = new Promise(resolve => {
    resolve(10);
  });
  settlePromiseNow(promise);
}, Error);


assertThrowsInstanceOf(() => {
  var promise = new Promise((_, reject) => {
    reject(10);
  });
  settlePromiseNow(promise);
}, Error);

assertThrowsInstanceOf(() => {
  var promise = new Promise(() => {
    throw 10;
  });
  settlePromiseNow(promise);
}, Error);
