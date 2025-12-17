for (var i = 0; i < 10; i++) {
  __proto__ = new Proxy({}, { getPrototypeOf() { } });
}
