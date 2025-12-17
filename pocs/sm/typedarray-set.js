function testDetachedTarget() {
  var target = new Int8Array(10);
  var source = new Int8Array(10);
  for (var i = 0; i <= 100; ++i) {
    if (i === 100) {
      detachArrayBuffer(target.buffer);
    }

    try {
      target.set(source);
    } catch (e) {
      print(e.name, "TypeError");
      print(i, 100);
      continue;
    }
    print(i < 100, true);
  }
}
testDetachedTarget();


function testDetachedSource() {
  var target = new Int8Array(10);
  var source = new Int8Array(10);
  for (var i = 0; i <= 100; ++i) {
    if (i === 100) {
      detachArrayBuffer(source.buffer);
    }

    try {
      target.set(source);
    } catch (e) {
      print(e.name, "TypeError");
      print(i, 100);
      continue;
    }
    print(i < 100, true);
  }
}
testDetachedSource();


function testOffsetNonInteger() {
  var target = new Int8Array(10);
  var source = new Int8Array(10);
  for (var i = 0; i <= 100; ++i) {
    
    var offset = [0, 0.5][(i === 100)|0];
    target.set(source, offset);
  }
}
testOffsetNonInteger();


function testOffsetNegative() {
  var target = new Int8Array(10);
  var source = new Int8Array(10);
  for (var i = 0; i <= 100; ++i) {
    var offset = [0, -1][(i === 100)|0]

    try {
      target.set(source, offset);
    } catch (e) {
      print(e.name, "RangeError");
      print(i, 100);
      continue;
    }
    print(i < 100, true);
  }
}
testOffsetNegative();


function testNoBitwiseCopyDifferentBuffer() {
  var target = new Float64Array(10);
  var source = new Float32Array(10);
  for (var i = 0; i <= 100; ++i) {
    source[0] = i;
    source[1] = i + 1;

    target.set(source);

    print(target[0], i);
    print(target[1], i + 1);
  }
}
testNoBitwiseCopyDifferentBuffer();


function testNoBitwiseCopySameBuffer() {
  var target = new Float64Array(10);
  var source = new Float32Array(target.buffer, 0, target.length);
  for (var i = 0; i <= 100; ++i) {
    source[0] = i;
    source[1] = i + 1;

    target.set(source);

    print(target[0], i);
    print(target[1], i + 1);
  }
}
testNoBitwiseCopySameBuffer();
