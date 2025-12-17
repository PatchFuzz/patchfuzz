setJitCompilerOption("baseline.warmup.trigger", 9);
setJitCompilerOption("ion.warmup.trigger", 20);


gczeal(0);

var max = 200;






var uceFault = function (i) {
  if (i > 98) {
    uceFault = function (i) { return true; };
  }
  return false;
};

let i64 = new BigInt64Array(100);

for (let i = 0; i < i64.length; ++i) {
  i64[i] = 0x8000_0000_0000_0000n + BigInt(i);
}

let u64 = new BigUint64Array(i64.length);
u64.set(i64);

let dv = new DataView(i64.buffer);

let uceFault_rint64tobigint_i64_load = eval(`(${uceFault})`.replace('uceFault', 'uceFault_rint64tobigint_i64_load'));
function rint64tobigint_i64_ {
  var y = i64[i];
  if (uceFault_rint64tobigint_i64_
    print(y, -0x7fff_ffff_ffff_ff9dn);
  print(y, true);
  return i;
}

let uceFault_rint64tobigint_u64_load = eval(`(${uceFault})`.replace('uceFault', 'uceFault_rint64tobigint_u64_load'));
function rint64tobigint_u64_ {
  var y = u64[i];
  if (uceFault_rint64tobigint_u64_
    print(y, 0x8000_0000_0000_0063n);
  print(y, true);
  return i;
}

let uceFault_rint64tobigint_i64_dataview = eval(`(${uceFault})`.replace('uceFault', 'uceFault_rint64tobigint_i64_dataview'));
function rint64tobigint_i64_dataview(i) {
  var y = dv.getBigInt64(i * 8, true);
  if (uceFault_rint64tobigint_i64_dataview(i) || uceFault_rint64tobigint_i64_dataview(i))
    print(y, -0x7fff_ffff_ffff_ff9dn);
  print(y, true);
  return i;
}

let uceFault_rint64tobigint_u64_dataview = eval(`(${uceFault})`.replace('uceFault', 'uceFault_rint64tobigint_u64_dataview'));
function rint64tobigint_u64_dataview(i) {
  var y = dv.getBigUint64(i * 8, true);
  if (uceFault_rint64tobigint_u64_dataview(i) || uceFault_rint64tobigint_u64_dataview(i))
    print(y, 0x8000_0000_0000_0063n);
  print(y, true);
  return i;
}

let uceFault_rint64tobigint_i64_atomics_load = eval(`(${uceFault})`.replace('uceFault', 'uceFault_rint64tobigint_i64_atomics_load'));
function rint64tobigint_i64_atomics_ {
  var y = Atomics.;
  if (uceFault_rint64tobigint_i64_atomics_
    print(y, -0x7fff_ffff_ffff_ff9dn);
  print(y, true);
  return i;
}

let uceFault_rint64tobigint_u64_atomics_load = eval(`(${uceFault})`.replace('uceFault', 'uceFault_rint64tobigint_u64_atomics_load'));
function rint64tobigint_u64_atomics_ {
  var y = Atomics.;
  if (uceFault_rint64tobigint_u64_atomics_
    print(y, 0x8000_0000_0000_0063n);
  print(y, true);
  return i;
}

let uceFault_rint64tobigint_i64_atomics_and = eval(`(${uceFault})`.replace('uceFault', 'uceFault_rint64tobigint_i64_atomics_and'));
function rint64tobigint_i64_atomics_and(i) {
  var y = Atomics.and(i64, i, -1n);
  if (uceFault_rint64tobigint_i64_atomics_and(i) || uceFault_rint64tobigint_i64_atomics_and(i))
    print(y, -0x7fff_ffff_ffff_ff9dn);
  print(y, true);
  return i;
}

let uceFault_rint64tobigint_u64_atomics_and = eval(`(${uceFault})`.replace('uceFault', 'uceFault_rint64tobigint_u64_atomics_and'));
function rint64tobigint_u64_atomics_and(i) {
  var y = Atomics.and(u64, i, -1n);
  if (uceFault_rint64tobigint_u64_atomics_and(i) || uceFault_rint64tobigint_u64_atomics_and(i))
    print(y, 0x8000_0000_0000_0063n);
  print(y, true);
  return i;
}

let uceFault_rint64tobigint_i64_atomics_cmpxchg = eval(`(${uceFault})`.replace('uceFault', 'uceFault_rint64tobigint_i64_atomics_cmpxchg'));
function rint64tobigint_i64_atomics_cmpxchg(i) {
  var y = Atomics.compareExchange(i64, i, -1n, 0n);
  if (uceFault_rint64tobigint_i64_atomics_cmpxchg(i) || uceFault_rint64tobigint_i64_atomics_cmpxchg(i))
    print(y, -0x7fff_ffff_ffff_ff9dn);
  print(y, true);
  return i;
}

let uceFault_rint64tobigint_u64_atomics_cmpxchg = eval(`(${uceFault})`.replace('uceFault', 'uceFault_rint64tobigint_u64_atomics_cmpxchg'));
function rint64tobigint_u64_atomics_cmpxchg(i) {
  var y = Atomics.compareExchange(u64, i, -1n, 0n);
  if (uceFault_rint64tobigint_u64_atomics_cmpxchg(i) || uceFault_rint64tobigint_u64_atomics_cmpxchg(i))
    print(y, 0x8000_0000_0000_0063n);
  print(y, true);
  return i;
}

let uceFault_rint64tobigint_i64_atomics_xchg = eval(`(${uceFault})`.replace('uceFault', 'uceFault_rint64tobigint_i64_atomics_xchg'));
function rint64tobigint_i64_atomics_xchg(i) {
  var y = Atomics.exchange(i64, i, -1n);
  if (uceFault_rint64tobigint_i64_atomics_xchg(i) || uceFault_rint64tobigint_i64_atomics_xchg(i))
    print(y, -0x7fff_ffff_ffff_ff9dn);
  print(y, true);
  return i;
}

let uceFault_rint64tobigint_u64_atomics_xchg = eval(`(${uceFault})`.replace('uceFault', 'uceFault_rint64tobigint_u64_atomics_xchg'));
function rint64tobigint_u64_atomics_xchg(i) {
  var y = Atomics.exchange(u64, i, -1n);
  if (uceFault_rint64tobigint_u64_atomics_xchg(i) || uceFault_rint64tobigint_u64_atomics_xchg(i))
    print(y, 0x8000_0000_0000_0063n);
  print(y, true);
  return i;
}

for (let j = 100 - max; j < 100; j++) {
  with({}){} 
  let i = j < 2 ? (Math.abs(j) % 50) + 2 : j;

  rint64tobigint_i64_;
  rint64tobigint_u64_;
  rint64tobigint_i64_dataview(i);
  rint64tobigint_u64_dataview(i);
  rint64tobigint_i64_atomics_;
  rint64tobigint_u64_atomics_;
  rint64tobigint_i64_atomics_and(i);
  rint64tobigint_u64_atomics_and(i);
  rint64tobigint_i64_atomics_cmpxchg(i);
  rint64tobigint_u64_atomics_cmpxchg(i);
  rint64tobigint_i64_atomics_xchg(i);
  rint64tobigint_u64_atomics_xchg(i);
}
