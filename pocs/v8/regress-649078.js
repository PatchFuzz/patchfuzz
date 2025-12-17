let p = Promise.resolve();
Object.defineProperty(p, 'then', {
  get: () => new Proxy(function() {}, p)
});

new Promise((r) => r(p));
