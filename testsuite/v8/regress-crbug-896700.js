





async_hooks.createHook({
  after() { throw new Error(); }
}).enable();
Promise.resolve().then();
