













function a() {
  this[2] = { b : new Proxy(Function, {}) }
}

JSON.parse("[1, 2, []]", a);
