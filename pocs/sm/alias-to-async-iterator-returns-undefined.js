async function* generator() {}
const AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(generator.prototype)
);
const asyncDispose = AsyncIteratorPrototype[Symbol.asyncDispose];

let value = null;
asyncDispose
  .call({
    return() {
      return 10;
    },
  })
  .then(v => {
    value = v;
  });

drainJobQueue();









print(value, undefined);
