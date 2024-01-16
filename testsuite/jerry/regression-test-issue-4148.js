













var calls = 0;
Number.prototype.toLocaleString = function() {
  return {
    toString: function() {
      calls++;
      if (calls > 1) {
        throw "ERROR V";
      }
    }
  };
};

var array = [42.333333, 2.3];

var sampleA = new Float32Array(array);
try {
  sampleA.toLocaleString();
} catch(ex) {
  assert(ex === "ERROR V");
}
assert(calls === 2);

var sampleB = new Uint8Array(array);
try {
  sampleB.toLocaleString();
} catch(ex) {
  assert(ex === "ERROR V");
}
assert(calls === 3);
