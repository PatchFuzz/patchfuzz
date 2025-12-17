const r = Realm.create();
const otherPromise = Realm.eval(r, 'Promise.resolve()');

print(
  () => {
    Promise.prototype.then.call(otherPromise, () => { });
  }, TypeError, 'no access');
