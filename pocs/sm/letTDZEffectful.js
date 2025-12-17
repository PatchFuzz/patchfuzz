function print(f) {
  var e = null;
  try {
    f();
  } catch (ex) {
    e = ex;
  }
  print(e instanceof ReferenceError, true);
}


print(function () { x; let x; });
print(function () { x; const x = undefined; });
