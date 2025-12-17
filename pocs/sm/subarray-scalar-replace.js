function print(actual, expected) {
  print(actual.length, expected.length);

  for (var i = 0; i < expected.length; ++i) {
    if (!Object.is(actual[i], expected[i])) {
      print(actual[i], expected[i], `[${actual}] != [${expected}] at index ${i}`);
    }
  }
}


function testLengthAndByteLength() {
  var i8 = new Int8Array(10);
  var i32 = new Int32Array(10);
  var i64 = new BigInt64Array(10);

  function inner() {
    var sub_i8 = i8.subarray();
    print(sub_i8.length, 10);
    print(sub_i8.byteLength, 10 * Int8Array.BYTES_PER_ELEMENT);
    print(sub_i8, true);

    var sub_i32 = i32.subarray(5);
    print(sub_i32.length, 5);
    print(sub_i32.byteLength, 5 * Int32Array.BYTES_PER_ELEMENT);
    print(sub_i32, true);

    var sub_i64 = i64.subarray(3, -1);
    print(sub_i64.length, 6);
    print(sub_i64.byteLength, 6 * BigInt64Array.BYTES_PER_ELEMENT);
    print(sub_i64, true);
  }
  for (var i = 0; i < 100; ++i) {
    inner();
  }
}
testLengthAndByteLength();


function testByteOffset() {
  var i8 = new Int8Array(new ArrayBuffer(20 * Int8Array.BYTES_PER_ELEMENT), 4, 10);
  var i32 = new Int32Array(new ArrayBuffer(20 * Int32Array.BYTES_PER_ELEMENT), 8, 10);
  var i64 = new BigInt64Array(new ArrayBuffer(20 * BigInt64Array.BYTES_PER_ELEMENT), 16, 10);

  function inner() {
    var sub_i8 = i8.subarray();
    print(sub_i8.byteOffset, 4);
    print(sub_i8, true);

    var sub_i32 = i32.subarray(5);
    print(sub_i32.byteOffset, 8 + 5 * Int32Array.BYTES_PER_ELEMENT);
    print(sub_i32, true);

    var sub_i64 = i64.subarray(3, -1);
    print(sub_i64.byteOffset, 16 + 3 * BigInt64Array.BYTES_PER_ELEMENT);
    print(sub_i64, true);
  }
  for (var i = 0; i < 100; ++i) {
    inner();
  }
}
testByteOffset();


function testGetElement() {
  var i8 = new Int8Array(10).map((v, k) => k);
  var i32 = new Int32Array(10).map((v, k) => k * 1000);
  var i64 = new BigInt64Array(10).map((v, k) => BigInt(k) * 1_000_000_000_000n);

  function inner() {
    var sub_i8 = i8.subarray();
    var sum = 0;
    for (var j = 0; j < sub_i8.length; ++j) {
      sum += sub_i8[j];
    }
    print(sum, 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9);
    print(sub_i8, true);

    var sub_i32 = i32.subarray(-6);
    var sum = 0;
    for (var j = 0; j < sub_i32.length; ++j) {
      sum += sub_i32[j];
    }
    print(sum, 4000 + 5000 + 6000 + 7000 + 8000 + 9000);
    print(sub_i32, true);

    var sub_i64 = i64.subarray(8, 100);
    var sum = 0n;
    for (var j = 0; j < sub_i64.length; ++j) {
      sum += sub_i64[j];
    }
    print(sum, 8_000_000_000_000n + 9_000_000_000_000n);
    print(sub_i64, true);
  }
  for (var i = 0; i < 100; ++i) {
    inner();
  }
}
testGetElement();


function testSetElement() {
  var i8 = new Int8Array(10);
  var i32 = new Int32Array(10);
  var i64 = new BigInt64Array(10);

  function inner() {
    i8.fill(0);
    i32.fill(0);
    i64.fill(0n);

    var sub_i8 = i8.subarray();
    var sum = 0;
    for (var j = 0; j < sub_i8.length; ++j) {
      sub_i8[j] = j * 10;
    }
    print(sub_i8, true);

    var sub_i32 = i32.subarray(-6);
    var sum = 0;
    for (var j = 0; j < sub_i32.length; ++j) {
      sub_i32[j] = j * 1000;
    }
    print(sub_i32, true);

    var sub_i64 = i64.subarray(8, 100);
    var sum = 0n;
    for (var j = 0; j < sub_i64.length; ++j) {
      sub_i64[j] = BigInt(j + 1) * 1111n;
    }
    print(sub_i64, true);

    print(i8, [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]);
    print(i32, [0, 0, 0, 0, 0, 1000, 2000, 3000, 4000, 5000]);
    print(i64, [0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 1111n, 2222n]);
  }
  for (var i = 0; i < 100; ++i) {
    inner();
  }
}
testSetElement();


function testFill() {
  var i8 = new Int8Array(10);
  var i32 = new Int32Array(10);
  var i64 = new BigInt64Array(10);

  function inner() {
    i8.fill(0);
    i32.fill(0);
    i64.fill(0n);

    var sub_i8 = i8.subarray();
    sub_i8.fill(1);
    print(sub_i8, true);

    var sub_i32 = i32.subarray(1);
    sub_i32.fill(1234, 0, -5);
    print(sub_i32, true);

    var sub_i64 = i64.subarray(2, 4);
    sub_i64.fill(0x123456789abcdefn, 1);
    print(sub_i64, true);

    print(i8, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    print(i32, [0, 1234, 1234, 1234, 1234, 0, 0, 0, 0, 0]);
    print(i64, [0n, 0n, 0n, 0x123456789abcdefn, 0n, 0n, 0n, 0n, 0n, 0n]);
  }
  for (var i = 0; i < 100; ++i) {
    inner();
  }
}
testFill();


function testSetSource() {
  var i8 = new Int8Array(10);
  var i32 = new Int32Array(10);
  var i64 = new BigInt64Array(10);

  var i8_source = new Int8Array(10).map((v, k) => k);
  var i32_source = new Int32Array(10).map((v, k) => k * 1000);
  var i64_source = new BigInt64Array(10).map((v, k) => BigInt(k) * 1_000_000_000_000n);

  function inner() {
    i8.fill(0);
    i32.fill(0);
    i64.fill(0n);

    var sub_i8 = i8_source.subarray();
    i8.set(sub_i8);
    print(sub_i8, true);

    var sub_i32 = i32_source.subarray(-8, -2);
    i32.set(sub_i32, 3);
    print(sub_i32, true);

    var sub_i64 = i64_source.subarray(5, 7);
    i64.set(sub_i64, 5);
    print(sub_i64, true);

    print(i8, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    print(i32, [0, 0, 0, 2000, 3000, 4000, 5000, 6000, 7000, 0]);
    print(i64, [0n, 0n, 0n, 0n, 0n, 5000000000000n, 6000000000000n, 0n, 0n, 0n]);
  }
  for (var i = 0; i < 100; ++i) {
    inner();
  }
}
testSetSource();


function testSetTarget() {
  var i8 = new Int8Array(10);
  var i32 = new Int32Array(10);
  var i64 = new BigInt64Array(10);

  var i8_source = new Int8Array(10).map((v, k) => k);
  var i32_source = new Int32Array(2).map((v, k) => (k + 1) * 1000);
  var i64_source = new BigInt64Array(4).map((v, k) => BigInt(k + 1) * 0x1111_1111n);

  function inner() {
    i8.fill(0);
    i32.fill(0);
    i64.fill(0n);

    var sub_i8 = i8.subarray();
    sub_i8.set(i8_source);
    print(sub_i8, true);

    var sub_i32 = i32.subarray(-8, -3);
    sub_i32.set(i32_source, 3);
    print(sub_i32, true);

    var sub_i64 = i64.subarray(2, 8);
    sub_i64.set(i64_source, 1);
    print(sub_i64, true);

    print(i8, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    print(i32, [0, 0, 0, 0, 0, 1000, 2000, 0, 0, 0]);
    print(i64, [0n, 0n, 0n, 0x1111_1111n, 0x2222_2222n, 0x3333_3333n, 0x4444_4444n, 0n, 0n, 0n]);
  }
  for (var i = 0; i < 100; ++i) {
    inner();
  }
}
testSetTarget();


function testSubarray() {
  var i8 = new Int8Array(10);
  var i32 = new Int32Array(10);
  var i64 = new BigInt64Array(10);

  var i64_one = new BigInt64Array([1n, 1n]);

  function inner() {
    i8.fill(0);
    i32.fill(0);
    i64.fill(0n);

    var sub_i8_1 = i8.subarray(1);
    var sub_i8_2 = sub_i8_1.subarray(2);
    print(sub_i8_1.length, 10 - 1);
    print(sub_i8_2.length, 10 - 1 - 2);

    sub_i8_1[2] = 10;
    print(sub_i8_2[0], 10);

    sub_i8_2[1] = 20;
    print(sub_i8_1[3], 20);

    print(sub_i8_1, true);
    print(sub_i8_2, true);


    var sub_i32_1 = i32.subarray(2);
    var sub_i32_2 = sub_i32_1.subarray(2, -3);
    print(sub_i32_1.length, 10 - 2);
    print(sub_i32_2.length, 10 - 2 - 2 - 3);

    sub_i32_2.fill(100);

    print(sub_i32_1, true);
    print(sub_i32_2, true);


    var sub_i64_1 = i64.subarray(2, 8);
    var sub_i64_2 = sub_i64_1.subarray(2);
    print(sub_i64_1.length, 10 - 4);
    print(sub_i64_2.length, 10 - 4 - 2);

    sub_i64_2.set(i64_one, 2);

    print(sub_i64_1, true);
    print(sub_i64_2, true);

    print(i8, [0, 0, 0, 10, 20, 0, 0, 0, 0, 0]);
    print(i32, [0, 0, 0, 0, 100, 100, 100, 0, 0, 0]);
    print(i64, [0n, 0n, 0n, 0n, 0n, 0n, 1n, 1n, 0n, 0n]);
  }
  for (var i = 0; i < 100; ++i) {
    inner();
  }
}
testSubarray();


function testSubarrayChain4() {
  var i8 = new Int8Array(10);
  var i32 = new Int32Array(10);
  var i64 = new BigInt64Array(10);

  var i64_one = new BigInt64Array([1n, 1n]);
  var i64_two = new BigInt64Array([2n]);

  function inner() {
    i8.fill(0);
    i32.fill(0);
    i64.fill(0n);

    var sub_i8_1 = i8.subarray(1);
    var sub_i8_2 = sub_i8_1.subarray(2);
    var sub_i8_3 = sub_i8_2.subarray(0);
    var sub_i8_4 = sub_i8_3.subarray(3);
    print(sub_i8_1.length, 10 - 1);
    print(sub_i8_2.length, 10 - 1 - 2);
    print(sub_i8_3.length, 10 - 1 - 2 - 0);
    print(sub_i8_4.length, 10 - 1 - 2 - 0 - 3);

    sub_i8_1[5] = 10;
    print(sub_i8_2[3], 10);
    print(sub_i8_3[3], 10);
    print(sub_i8_4[0], 10);

    sub_i8_2[4] = 20;
    print(sub_i8_1[6], 20);
    print(sub_i8_3[4], 20);
    print(sub_i8_4[1], 20);

    sub_i8_3[5] = 30;
    print(sub_i8_1[7], 30);
    print(sub_i8_3[5], 30);
    print(sub_i8_4[2], 30);

    sub_i8_4[3] = 40;
    print(sub_i8_1[8], 40);
    print(sub_i8_2[6], 40);
    print(sub_i8_3[6], 40);

    print(sub_i8_1, true);
    print(sub_i8_2, true);
    print(sub_i8_3, true);
    print(sub_i8_4, true);

    var sub_i32_1 = i32.subarray(2);
    var sub_i32_2 = sub_i32_1.subarray(2, -3);
    var sub_i32_3 = sub_i32_2.subarray();
    var sub_i32_4 = sub_i32_3.subarray(2);
    print(sub_i32_1.length, 10 - 2);
    print(sub_i32_2.length, 10 - 2 - 2 - 3);
    print(sub_i32_3.length, 10 - 2 - 2 - 3);
    print(sub_i32_4.length, 10 - 2 - 2 - 3 - 2);

    sub_i32_2.fill(100);
    sub_i32_4.fill(200);

    print(sub_i32_1, true);
    print(sub_i32_2, true);
    print(sub_i32_3, true);
    print(sub_i32_4, true);

    var sub_i64_1 = i64.subarray(2, 8);
    var sub_i64_2 = sub_i64_1.subarray(2);
    var sub_i64_3 = sub_i64_2.subarray(1);
    var sub_i64_4 = sub_i64_3.subarray();
    print(sub_i64_1.length, 10 - 4);
    print(sub_i64_2.length, 10 - 4 - 2);
    print(sub_i64_3.length, 10 - 4 - 2 - 1);
    print(sub_i64_4.length, 10 - 4 - 2 - 1);

    sub_i64_2.set(i64_one, 2);
    sub_i64_4.set(i64_two);

    print(sub_i64_1, true);
    print(sub_i64_2, true);
    print(sub_i64_3, true);
    print(sub_i64_4, true);

    print(i8, [0, 0, 0, 0, 0, 0, 10, 20, 30, 40]);
    print(i32, [0, 0, 0, 0, 100, 100, 200, 0, 0, 0]);
    print(i64, [0n, 0n, 0n, 0n, 0n, 2n, 1n, 1n, 0n, 0n]);
  }
  for (var i = 0; i < 100; ++i) {
    inner();
  }
}
testSubarrayChain4();
