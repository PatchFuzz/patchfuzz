function testDetached() {
  var ta = new Int8Array(10);
  for (var i = 0; i <= 100; ++i) {
    if (i === 100) {
      detachArrayBuffer(ta.buffer);
    }

    try {
      ta.fill(0);
    } catch (e) {
      print(e.name, "TypeError");
      print(i, 100);
      continue;
    }
    print(i < 100, true);
  }
}
testDetached();


function testContentTypeInt32() {
  var ta = new Int32Array(10);
  for (var i = 0; i <= 100; ++i) {
    var value = [0, 0n][(i === 100)|0]

    try {
      ta.fill(value);
    } catch (e) {
      print(e.name, "TypeError");
      print(i, 100);
      continue;
    }
    print(i < 100, true);
  }
}
testContentTypeInt32();


function testContentTypeBigInt() {
  var ta = new BigInt64Array(10);
  for (var i = 0; i <= 100; ++i) {
    var value = [0n, 0][(i === 100)|0]

    try {
      ta.fill(value);
    } catch (e) {
      print(e.name, "TypeError");
      print(i, 100);
      continue;
    }
    print(i < 100, true);
  }
}
testContentTypeBigInt();


function testStartIndexNonInteger() {
  var ta = new Int8Array(10);
  for (var i = 0; i <= 100; ++i) {
    
    var start = [0, 1.5][(i === 100)|0];

    ta.fill(i, start);

    print(ta[0], (i < 100 ? i : i - 1));
    print(ta[1], i);
  }
}
testStartIndexNonInteger();


function testEndIndexNonInteger() {
  var ta = new Int8Array(10);
  for (var i = 0; i <= 100; ++i) {
    
    var end = [5, 6.5][(i === 100)|0];

    ta.fill(i, 0, end);

    print(ta[4], i);
    print(ta[5], (i < 100 ? 0 : i));
  }
}
testEndIndexNonInteger();
