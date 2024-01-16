




function createMap(values, n) {
  var xs = [...values];
  for (var i = 0; i < n; ++i) {
    xs.push({});
  }
  return new Map(xs.map((x, i) => [x, i + 1]));
}

function runTest(fn) {
  fn(0);
  fn(100);
}

function testInlineDigitsSameSign_same_map(n) {
  var xs = [1n, 2n];
  var ys = [3n, 4n];
  var zs = [...xs, ...ys];
  var map = createMap(xs, n);

  var N = 100;
  var c = 0;
  for (var i = 0; i < N; ++i) {
    var z = zs[i & 3];
    var v = map.get(z);
    if (v !== undefined) c += v;
    var w = map.get(z);
    if (w !== undefined) c += w;
  }
  assertEq(c, N + N / 2);
}
runTest(testInlineDigitsSameSign_same_map);

function testInlineDigitsDifferentSign_same_map(n) {
  var xs = [-1n, 2n];
  var ys = [1n, -2n];
  var zs = [...xs, ...ys];
  var map = createMap(xs, n);

  var N = 100;
  var c = 0;
  for (var i = 0; i < N; ++i) {
    var z = zs[i & 3];
    var v = map.get(z);
    if (v !== undefined) c += v;
    var w = map.get(z);
    if (w !== undefined) c += w;
  }
  assertEq(c, N + N / 2);
}
runTest(testInlineDigitsDifferentSign_same_map);

function testHeapDigitsSameSign_same_map(n) {
  
  var heap = 2n ** 1000n;

  var xs = [heap + 1n, heap + 2n];
  var ys = [heap + 3n, heap + 4n];
  var zs = [...xs, ...ys];
  var map = createMap(xs, n);

  var N = 100;
  var c = 0;
  for (var i = 0; i < N; ++i) {
    var z = zs[i & 3];
    var v = map.get(z);
    if (v !== undefined) c += v;
    var w = map.get(z);
    if (w !== undefined) c += w;
  }
  assertEq(c, N + N / 2);
}
runTest(testHeapDigitsSameSign_same_map);

function testHeapDigitsDifferentSign_same_map(n) {
  
  var heap = 2n ** 1000n;

  var xs = [-(heap + 1n), heap + 2n];
  var ys = [heap + 1n, -(heap + 2n)];
  var zs = [...xs, ...ys];
  var map = createMap(xs, n);

  var N = 100;
  var c = 0;
  for (var i = 0; i < N; ++i) {
    var z = zs[i & 3];
    var v = map.get(z);
    if (v !== undefined) c += v;
    var w = map.get(z);
    if (w !== undefined) c += w;
  }
  assertEq(c, N + N / 2);
}
runTest(testHeapDigitsDifferentSign_same_map);



function testInlineDigitsSameSign_different_map(n) {
  var xs = [1n, 2n];
  var ys = [3n, 4n];
  var zs = [...xs, ...ys];
  var map1 = createMap(xs, n);
  var map2 = createMap(xs, n);

  var N = 100;
  var c = 0;
  for (var i = 0; i < N; ++i) {
    var z = zs[i & 3];
    var v = map1.get(z);
    if (v !== undefined) c += v;
    var w = map2.get(z);
    if (w !== undefined) c += w;
  }
  assertEq(c, N + N / 2);
}
runTest(testInlineDigitsSameSign_different_map);

function testInlineDigitsDifferentSign_different_map(n) {
  var xs = [-1n, 2n];
  var ys = [1n, -2n];
  var zs = [...xs, ...ys];
  var map1 = createMap(xs, n);
  var map2 = createMap(xs, n);

  var N = 100;
  var c = 0;
  for (var i = 0; i < N; ++i) {
    var z = zs[i & 3];
    var v = map1.get(z);
    if (v !== undefined) c += v;
    var w = map2.get(z);
    if (w !== undefined) c += w;
  }
  assertEq(c, N + N / 2);
}
runTest(testInlineDigitsDifferentSign_different_map);

function testHeapDigitsSameSign_different_map(n) {
  
  var heap = 2n ** 1000n;

  var xs = [heap + 1n, heap + 2n];
  var ys = [heap + 3n, heap + 4n];
  var zs = [...xs, ...ys];
  var map1 = createMap(xs, n);
  var map2 = createMap(xs, n);

  var N = 100;
  var c = 0;
  for (var i = 0; i < N; ++i) {
    var z = zs[i & 3];
    var v = map1.get(z);
    if (v !== undefined) c += v;
    var w = map2.get(z);
    if (w !== undefined) c += w;
  }
  assertEq(c, N + N / 2);
}
runTest(testHeapDigitsSameSign_different_map);

function testHeapDigitsDifferentSign_different_map(n) {
  
  var heap = 2n ** 1000n;

  var xs = [-(heap + 1n), heap + 2n];
  var ys = [heap + 1n, -(heap + 2n)];
  var zs = [...xs, ...ys];
  var map1 = createMap(xs, n);
  var map2 = createMap(xs, n);

  var N = 100;
  var c = 0;
  for (var i = 0; i < N; ++i) {
    var z = zs[i & 3];
    var v = map1.get(z);
    if (v !== undefined) c += v;
    var w = map2.get(z);
    if (w !== undefined) c += w;
  }
  assertEq(c, N + N / 2);
}
runTest(testHeapDigitsDifferentSign_different_map);



function test_alias(n) {
  var xs = [1n, 2n];
  var map = createMap([], n);

  var N = 100;
  var c = 0;
  for (var i = 0; i < N; ++i) {
    var x = xs[i & 1];

    map.set(x, 1);
    var v = map.get(x);

    map.delete(x);
    var w = map.get(x);

    c += v;
    assertEq(w, undefined);
  }
  assertEq(c, N);
}
runTest(test_alias);
