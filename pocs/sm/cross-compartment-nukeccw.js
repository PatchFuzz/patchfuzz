;

const otherGlobal = newGlobal({newCompartment: true});

function nukeValue(wrapper, value) {
  return {
    valueOf() {
      nukeCCW(wrapper);
      return value;
    }
  };
};

function print(value) {
  print(() => value.foo, "can't access dead object");
}


{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 1;

  let val = Atomics.;

  print(val, 1);
  print(ta);
}
{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 1;

  let val = Atomics.;

  print(val, 1);
  print(ta[0], 1);
  print(sab);
}


{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);

  Atomics.store(ta, 0, nukeValue(ta, 1));

  print(ta);
}
{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);

  Atomics.store(ta, 0, nukeValue(sab, 1));

  print(ta[0], 1);
  print(sab);
}


{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 1;

  let val = Atomics.compareExchange(ta, 0, 1, nukeValue(ta, 2));

  print(val, 1);
  print(ta);
}
{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 1;

  let val = Atomics.compareExchange(ta, 0, 1, nukeValue(sab, 2));

  print(val, 1);
  print(ta[0], 2);
  print(sab);
}


{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 1;

  let val = Atomics.exchange(ta, 0, nukeValue(ta, 2));

  print(val, 1);
  print(ta);
}
{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 1;

  let val = Atomics.exchange(ta, 0, nukeValue(sab, 2));

  print(val, 1);
  print(ta[0], 2);
  print(sab);
}


{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 1;

  let val = Atomics.add(ta, 0, nukeValue(ta, 2));

  print(val, 1);
  print(ta);
}
{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 1;

  let val = Atomics.add(ta, 0, nukeValue(sab, 2));

  print(val, 1);
  print(ta[0], 3);
  print(sab);
}


{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 3;

  let val = Atomics.sub(ta, 0, nukeValue(ta, 2));

  print(val, 3);
  print(ta);
}
{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 3;

  let val = Atomics.sub(ta, 0, nukeValue(sab, 2));

  print(val, 3);
  print(ta[0], 1);
  print(sab);
}


{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 3;

  let val = Atomics.and(ta, 0, nukeValue(ta, 1));

  print(val, 3);
  print(ta);
}
{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 3;

  let val = Atomics.and(ta, 0, nukeValue(sab, 1));

  print(val, 3);
  print(ta[0], 1);
  print(sab);
}


{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 2;

  let val = Atomics.or(ta, 0, nukeValue(ta, 1));

  print(val, 2);
  print(ta);
}
{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 2;

  let val = Atomics.or(ta, 0, nukeValue(sab, 1));

  print(val, 2);
  print(ta[0], 3);
  print(sab);
}


{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 3;

  let val = Atomics.xor(ta, 0, nukeValue(ta, 1));

  print(val, 3);
  print(ta);
}
{
  let sab = new otherGlobal.SharedArrayBuffer(4);
  let ta = new otherGlobal.Int32Array(sab);
  ta[0] = 3;

  let val = Atomics.xor(ta, 0, nukeValue(sab, 1));

  print(val, 3);
  print(ta[0], 2);
  print(sab);
}
