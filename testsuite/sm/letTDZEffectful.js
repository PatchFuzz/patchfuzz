function assertThrowsReferenceError(f) {
  var e = null;
  try {
    f();
  } catch (ex) {
    e = ex;
  }
  assertEq(e instanceof ReferenceError, true);
}


assertThrowsReferenceError(function () { x; let x; });
assertThrowsReferenceError(function () { x; const x = undefined; });
