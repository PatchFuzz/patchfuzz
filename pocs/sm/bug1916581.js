function blackhole() {
  with ({});
}































function f1() {
  const i64 = new BigInt64Array(1);

  for (let i = 0; i < 100; i++) {
    
    let x = Atomics.;

    
    
    let y = i64[2];

    blackhole(x, y);
  }
}
f1();

function f2() {
  const i64 = new BigInt64Array(1);

  for (let i = 0; i < 100; i++) {
    let j = i & 3;

    
    
    let z = i64[j];

    
    let x = Atomics.;

    
    
    let y = i64[j];

    blackhole(x, y, z);
  }
}
f2();
