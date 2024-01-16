




function createSet(values, n) {
  var xs = [...values];
  for (var i = 0; i < n; ++i) {
    xs.push({});
  }
  return new Set(xs);
}

function runTest(fn) {
  fn(0);
  fn(100);
}

function testPolymorphic_same_set(n) {
  var xs = [10, 10.5, "test", Symbol("?"), 123n, -123n, {}, []];
  var ys = [-0, NaN, "bad", Symbol("!"), 42n, -99n, {}, []];
  var zs = [...xs, ...ys];
  var set = createSet(xs, n);

  var N = 128;
  var c = 0;
  for (var i = 0; i < N; ++i) {
    var z = zs[i & 15];
    if (set.has(z)) c++;
    if (set.has(z)) c++;
  }
  assertEq(c, N);
}
runTest(testPolymorphic_same_set);



function testPolymorphic_different_set(n) {
  var xs = [10, 10.5, "test", Symbol("?"), 123n, -123n, {}, []];
  var ys = [-0, NaN, "bad", Symbol("!"), 42n, -99n, {}, []];
  var zs = [...xs, ...ys];
  var set1 = createSet(xs, n);
  var set2 = createSet(xs, n);

  var N = 128;
  var c = 0;
  for (var i = 0; i < N; ++i) {
    var z = zs[i & 15];
    if (set1.has(z)) c++;
    if (set2.has(z)) c++;
  }
  assertEq(c, N);
}
runTest(testPolymorphic_different_set);



function testPolymorphic_alias(n) {
  var xs = [10, 10.5, "test", Symbol("?"), 123n, -123n, {}, []];
  var set = createSet([], n);

  var N = 128;
  var c = 0;
  for (var i = 0; i < N; ++i) {
    var x = xs[i & 15];

    set.add(x);
    if (set.has(x)) c++;

    set.delete(x);
    if (set.has(x)) c++;
  }
  assertEq(c, N);
}
runTest(testPolymorphic_alias);




function testRekey() {
  var set = new Set();
  var c = 0;
  var N = 100;
  for (var i = 0; i < N; ++i) {
    var k = (i & 1) ? {} : null;
    set.add(k);

    if (set.has(k)) c++;

    minorgc();

    if (set.has(k)) c++;
  }

  assertEq(c, N * 2);
}
testRekey();
