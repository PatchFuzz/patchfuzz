





var PI = new Proxy(this, {
  get() {
      PI();
  }
});

assertThrows(() => new gc(PI, {}), TypeError);
