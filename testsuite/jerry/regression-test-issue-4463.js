













function Test262Error(message) {
  this.message = message || "";
}

Test262Error.prototype.toString = function () {
  return "Test262Error: " + this.message;
};

var newTarget = function () {}.bind(null);
Object.defineProperty(newTarget, "prototype", {
  get() {
    throw new Test262Error();
  },
});

var typedArrayConstructors = [
  Float64Array,
  Float32Array,
  Int32Array,
  Int16Array,
  Int8Array,
  Uint32Array,
  Uint16Array,
  Uint8Array,
  Uint8ClampedArray,
];

for (var type of typedArrayConstructors) {
  try {
    Reflect.construct(Uint8ClampedArray, [], newTarget);
  } catch (error) {
    if (!(error instanceof Test262Error)) {
      throw "error must be instanceof Test262Error";
    }
  }
}
