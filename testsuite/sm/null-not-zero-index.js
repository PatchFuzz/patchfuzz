

function f(index) {
  var a = [123];
  return a[index]
}

function g() {
  for (var i = 0; i < 100; i++) {
    
    assertEq(f(i > 90 ? null : 0), i > 90 ? undefined : 123)
  }
}

for (var j = 0; j < 10; j++) {
  g();
}
