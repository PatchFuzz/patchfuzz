function foo(a, b, c) {
  var x = 0, y = 0, z = 0;
  if (a < b) {
    x = a + 0;
    y = b + 0;
    z = c + 0;
  } else {
    x = a;
    y = b;
    z = c;
  }
  return x + y + z;
}
print(foo(1, 2, 3), 6);



function foo(a, b, c) {
  var x = 0, y = 0, z = 0;
  if (a < b) {
    x = a + 0;
    y = b + 0;
    z = c + 0;
  } else {
    switch (c) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: return 0;
    }
    x = 0;
    y = 0;
    z = 0;
  }
  return x + y + z;
}
print(foo(1, 2, 3), 6);
