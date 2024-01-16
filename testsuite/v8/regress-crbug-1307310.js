





const gsab = new SharedArrayBuffer(4, {
    maxByteLength: 8
});
const ta = new Int8Array(gsab);

function defineUndefined(ta) {
  Object.defineProperty(ta, undefined, {
      get: function () {}
  });
}

defineUndefined(ta);
assertThrows(() => { defineUndefined(ta); });
