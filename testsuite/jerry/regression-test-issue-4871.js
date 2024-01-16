













resolved = false;

function T(p, r, u) {
  return Object.assign(p, {
    then(onFulfilled, onRejected) {
      if (u) {
        onFulfilled(r);
      } else {
        onFulfilled();
      }

      return Promise.prototype.then.call(this, onFulfilled, onRejected);
    }
  });
}

var ps = [T(Promise.resolve('success'))];
Promise.all(ps).then(res => {
  resolved = true;
}).catch(err => {
  assert(false);
});

function __checkAsync() {
  assert(resolved);
}
