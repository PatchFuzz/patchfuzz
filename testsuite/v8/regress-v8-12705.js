



const r = Realm.create();
const otherPromise = Realm.eval(r, 'Promise.resolve()');

assertThrows(
  () => {
    Promise.prototype.then.call(otherPromise, () => { });
  }, TypeError, 'no access');
