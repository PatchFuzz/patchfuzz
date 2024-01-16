





async function* foo() {
  await 1;
  throw new Error();
}

(async () => {
  for await (const x of foo()) { }
})();

async_hooks.createHook({
  promiseResolve() {
    throw new Error();
  }
}).enable()
