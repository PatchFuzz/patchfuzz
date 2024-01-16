






load("./resources/v8-mjsunit.js", "caller relative");
load("./resources/v8-typedarray-helpers.js", "caller relative");

for (let i = 0; i < 1000; i++) {
  const rab = new ArrayBuffer(1632, {"maxByteLength": 4096});
  const ta1 = new Uint32Array(rab);
  const ta2 = new Float32Array(rab);
  rab.resize(2004);
  ta1["set"](ta2);
}
