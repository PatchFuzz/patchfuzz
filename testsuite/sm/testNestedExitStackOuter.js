
function testNestedExitStackInner(j, counter) {
  ++counter;
  var b = 0;
  for (var i = 1; i <= 9; i++) {
    ++b;
    var a;
    
    
    
    if (j < 9)
      a = 1;
    else
      a = 0;
    ++b;
    b += a;
  }
  return counter + b;
}
function testNestedExitStackOuter() {
  var counter = 0;
  for (var j = 1; j <= 9; ++j) {
    for (var k = 1; k <= 9; ++k) {
      counter = testNestedExitStackInner(j, counter);
    }
  }
  return counter;
}

