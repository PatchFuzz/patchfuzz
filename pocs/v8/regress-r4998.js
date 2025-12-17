function foo() {
  return;
}

function bar() {
  var x1 = 3;
  var x2 = 3;
  var x3 = 3;
  var x4 = 3;
  var x5 = 3;
  var x6 = 3;
  var x7 = 3;
  var x8 = 3;
  var x9 = 3;
  var x10 = 3;
  var x11 = 3;
  var x12 = 3;
  var x13 = 3;

  foo();

  x1 = 257;
  x2 = 258;
  x3 = 259;
  x4 = 260;
  x5 = 261;
  x6 = 262;
  x7 = 263;
  x8 = 264;
  x9 = 265;
  x10 = 266;
  x11 = 267;
  x12 = 268;
  x13 = 269;

  
  
  
  
  
  
  
  for (x7 = 3; x7 < 10; ++x7) {
    foo();
  }
}

bar();

function aliasing() {
  var x = 3;
  var j;
  for (j = 7; j < 11; ++j) {
    x = j;
  }

  print(10, x);
  print(11, j);
}

aliasing();
