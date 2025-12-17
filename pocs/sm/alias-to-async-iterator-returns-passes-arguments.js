async function* generator() {}
const AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(generator.prototype)
);
const asyncDispose = AsyncIteratorPrototype[Symbol.asyncDispose];

let len = null;
let arg0 = null;
asyncDispose.call({
  return() {
    len = arguments.length;
    arg0 = arguments[0];
    return;
  },
});
drainJobQueue();








print(len, 1);
print(arg0, undefined);
