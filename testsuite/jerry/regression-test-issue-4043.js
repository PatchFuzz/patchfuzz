













function f(a, b, c) { }

Object.defineProperty(f, "length", {
  writable: true,
  configurable: true,
  value: 10 ** 42
});

assert(f.bind().length == 10 ** 42);
