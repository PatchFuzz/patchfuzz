

var sum = 0;

function foo(copy, shouldThrow) {
  switch (copy) {
   case 0:
    var x = 0;
    try {
      if (shouldThrow) { throw 0;}
      x = 1;
    } catch {
      x = "a";
    }
    
    for (var i = 0; i < 100; i++) {
      sum += x;
    }
    break;
   case 1:
    var y = 0;
    try {
      if (shouldThrow) { throw 0;}
      y = 1;
    } catch {
      y = "a";
    }
    
    for (var i = 0; i < 100; i++) {
      sum += y;
    }
    break;
  }
}

with ({}) {}
for (var i = 0; i < 2; i++) {
  for (var j = 0; j < 50; j++) {
    foo(i, false);
  }
  foo(i, true);
}
