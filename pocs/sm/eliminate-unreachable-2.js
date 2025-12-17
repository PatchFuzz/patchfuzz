function test1(v) {
  if (v) {
    if (v) {
      print(v, v);
    } else {
      print(0, 1);
    }
  } else {
    if (v) {
      print(0, 1);
    } else {
      print(v, v);
    }
  }
  print(v, v);
}

function test() {
  test1(true);
  test1(false);
}

for (var i = 0; i < 100; i++)
  test();
