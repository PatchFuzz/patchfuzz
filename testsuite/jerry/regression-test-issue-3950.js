













function a() {
  this[2] = new Proxy(new function() { return new Array }, {})
  return {}
}

JSON.parse("[1, 2, []]", a);
