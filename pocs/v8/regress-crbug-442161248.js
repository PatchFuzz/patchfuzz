Object.defineProperty(Promise.prototype, 'constructor', {
  get() { throw 42; }
});

(async () => {
  const src = `const p = new Promise(r => {}); await p;`;
  await import(`data:text/javascript, ${src}`);
})();
