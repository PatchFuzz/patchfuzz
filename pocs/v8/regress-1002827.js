var PI = new Proxy(this, {
  get() {
      PI();
  }
});

print(() => new gc(PI, {}), TypeError);
