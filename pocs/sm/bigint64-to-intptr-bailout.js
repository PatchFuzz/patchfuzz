function i64InI32Range() {
  var ta = new BigInt64Array([
    -0x8000_0000n,
    -0x7fff_ffffn,
    -2n,
    -1n,
    0n,
    1n,
    2n,
    0x7fff_fffen,
    0x7fff_ffffn,
  ]);

  
  
  var zero = new BigInt64Array([
    0n, 0n,
  ]);

  var N = 200;
  for (var i = 0; i < N; ++i) {
    var x = ta[i % ta.length];
    var y = zero[i & 1];
    var z = x + y;
    print(z, x);
  }
}
for (var i = 0; i < 2; ++i) i64InI32Range();


function i64NotInI32RangeBailout() {
  var ta = new BigInt64Array([
    
    0x8000_0000n,

    -0x8000_0000n,
    -0x7fff_ffffn,
    -2n,
    -1n,
    0n,
    1n,
    2n,
    0x7fff_fffen,
    0x7fff_ffffn,
  ]);

  
  
  var zero = new BigInt64Array([
    0n, 0n,
  ]);

  var N = 200;
  for (var i = 0; i <= N; ++i) {
    
    
    var index = ((1 + (i % (ta.length - 1))) * (i < N))|0;

    var x = ta[index];
    var y = zero[i & 1];
    var z = x + y;
    print(z, x);
  }
  print(index, 0);
  print(x, 0x8000_0000n);
}
for (var i = 0; i < 2; ++i) i64NotInI32RangeBailout();


function i64NotInI32RangeBailout2() {
  var ta = new BigInt64Array([
    0x8000_0000_0000_0000n,

    -0x8000_0000n,
    -0x7fff_ffffn,
    -2n,
    -1n,
    0n,
    1n,
    2n,
    0x7fff_fffen,
    0x7fff_ffffn,
  ]);

  
  
  var zero = new BigInt64Array([
    0n, 0n,
  ]);

  var N = 200;
  for (var i = 0; i <= N; ++i) {
    
    
    var index = ((1 + (i % (ta.length - 1))) * (i < N))|0;

    var x = ta[index];
    var y = zero[i & 1];
    var z = x + y;
    print(z, x);
  }
  print(index, 0);
  print(x, -0x8000_0000_0000_0000n);
}
for (var i = 0; i < 2; ++i) i64NotInI32RangeBailout2();


function u64InI32Range() {
  var ta = new BigUint64Array([
    0n,
    1n,
    2n,
    0x7fff_fffen,
    0x7fff_ffffn,
  ]);

  
  
  var zero = new BigUint64Array([
    0n, 0n,
  ]);

  var N = 200;
  for (var i = 0; i < N; ++i) {
    var x = ta[i % ta.length];
    var y = zero[i & 1];
    var z = x + y;
    print(z, x);
  }
}
for (var i = 0; i < 2; ++i) u64InI32Range();


function u64NotInI32RangeBailout() {
  var ta = new BigUint64Array([
    0x8000_0000n,

    0n,
    1n,
    2n,
    0x7fff_fffen,
    0x7fff_ffffn,
  ]);

  
  
  var zero = new BigUint64Array([
    0n, 0n,
  ]);

  var N = 200;
  for (var i = 0; i <= N; ++i) {
    
    
    var index = ((1 + (i % (ta.length - 1))) * (i < N))|0;

    var x = ta[index];
    var y = zero[i & 1];
    var z = x + y;
    print(z, x);
  }
  print(index, 0);
  print(x, 0x8000_0000n);
}
for (var i = 0; i < 2; ++i) u64NotInI32RangeBailout();


function u64NotInI64RangeBailout() {
  var ta = new BigUint64Array([
    0x8000_0000_0000_0000n,

    0n,
    1n,
    2n,
    0x7fff_fffen,
    0x7fff_ffffn,
  ]);

  
  
  var zero = new BigUint64Array([
    0n, 0n,
  ]);

  var N = 200;
  for (var i = 0; i <= N; ++i) {
    
    
    var index = ((1 + (i % (ta.length - 1))) * (i < N))|0;

    var x = ta[index];
    var y = zero[i & 1];
    var z = x + y;
    print(z, x);
  }
  print(index, 0);
  print(x, 0x8000_0000_0000_0000n);
}
for (var i = 0; i < 2; ++i) u64NotInI64RangeBailout();
