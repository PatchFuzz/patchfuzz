








var values = [
  10,
  false,
  "test"
];

for (let val of values) {
  var proto = Object.getPrototypeOf(val);

  var proxy = new Proxy({}, {});
  Object.setPrototypeOf(proxy, proto);
}
