{
  const rab = new ArrayBuffer(1, {maxByteLength: 2});
  const ta = new Int8Array(rab, 0, 1);
  function ctor() {
    return ta;
  }
  ctor[Symbol.species] = ctor;
  ta.constructor = ctor;
  print(() => { ta.map(_ => rab.resize(0)); });
}

{
  const ab = new ArrayBuffer(1);
  const ta1 = new Int8Array(ab, 0, 1);

  const rab = new ArrayBuffer(1, {maxByteLength: 2});
  const ta2 = new Int8Array(rab, 0, 1);

  function ctor() {
    return ta2;
  }
  ctor[Symbol.species] = ctor;
  ta1.constructor = ctor;
  ta1.map(_ => rab.resize(0));
}
