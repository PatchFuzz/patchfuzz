async_hooks.createHook({
  after() { throw new Error(); }
}).enable();

(async function() {
  await 1;
  await 1;
})();
