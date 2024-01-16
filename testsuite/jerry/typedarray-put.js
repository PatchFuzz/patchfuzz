













var typedarrays = [
  new Uint8ClampedArray([1]),
  new Uint8Array([1]),
  new Uint16Array([1]),
  new Uint32Array([1]),
  new Float32Array([1]),
  new Float64Array([1]),
  new Int8Array([1]),
  new Int16Array([1]),
  new Int32Array([1]),
  new BigInt64Array([1n]),
  new BigUint64Array([1n]),
];

for (let ta of typedarrays) {
  for (let prop_name of [2, 5.1]) {
    var set_value = 4.2;

    if (ta.constructor === BigInt64Array || ta.constructor === BigUint64Array)
    {
      set_value = 4n;
    }

    (function () {
      "use strict";
      let set_result = ta[prop_name] = set_value;
      assert(set_result === set_value);
      assert(!ta.hasOwnProperty(prop_name));
      assert(ta.length === 1);
    })();

    (function () {
      let set_result = ta[prop_name] = set_value;
      assert(set_result === set_value);
      assert(!ta.hasOwnProperty(prop_name));
      assert(ta.length === 1);
    })();
  }
}
