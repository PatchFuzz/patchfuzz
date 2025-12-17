function test1(v) {
  var i = 0;
  if (v) {
    if (v) {
      i += 1;
    } else {
      i += 10;
    }
    i += 100;
  } else {
    if (v) {
      i += 1000;
    } else {
      i += 10000;
    }
    i += 100000;
  }
  i += 1000000;
  return i;
}

function test() {
  print(test1(true), 1000101);
  print(test1(false), 1110000);
}

for (var i = 0; i < 100; i++)
  test();
