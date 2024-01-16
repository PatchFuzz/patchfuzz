

function f1() {
  return 0;
}
function f2(a) {
  return a * 2;
}

function funCall(fn) {
  
  for (var i = 0; i < 100; ++i) {
    assertEq(f1?.call(), 0);
  }

  
  for (var i = 0; i < 100; ++i) {
    assertEq(f1?.call(null), 0);
  }

  
  for (var i = 0; i < 100; ++i) {
    assertEq(f1?.call(null, 1), 0);
    assertEq(f2?.call(null, 5), 10);
  }

  
  for (var i = 0; i < 100; ++i) {
    assertEq(f1?.call(null, 1, 2, 3), 0);
    assertEq(f2?.call(null, 4, 5, 6), 8);
  }
}

for (var i = 0; i < 5; ++i) { funCall(); }

function funApply(fn) {
  
  for (var i = 0; i < 100; ++i) {
    assertEq(f1?.apply(), 0);
  }

  
  for (var i = 0; i < 100; ++i) {
    assertEq(f1?.apply(null), 0);
  }

  
  for (var i = 0; i < 100; ++i) {
    assertEq(f1?.apply(null, [1]), 0);
    assertEq(f2?.apply(null, [5]), 10);
  }

  
  for (var i = 0; i < 100; ++i) {
    assertEq(f1?.apply(null, [1, 2, 3]), 0);
    assertEq(f2?.apply(null, [4, 5, 6]), 8);
  }
}

for (var i = 0; i < 5; ++i) { funApply(); }
