function simple() {
  var o = {a: 1};
  o.b = 2;

  print(o.a, 1);
  print(o.b, 2);
}

function condition1(b) {
  var o = {a: 1};

  if (b) {
    o.b = 2;
  }

  o.c = 3;

  print(o.a, 1);
  if (b) {
    print(o.b, 2);
  } else {
    print('b' in o, false);
  }
  print(o.c, 3);
}

function condition2(b) {
  var o = {a: 1};

  if (b) {
    o.b = 2;
  } else {
    o.b = 3;
  }

  o.c = 3;

  print(o.a, 1);
  print(o.b, b ? 2 : 3);
  print(o.c, 3);
}

function condition3(b) {
  var o = {a: 1};

  if (b) {
    o.b = 2;
  } else {
    o.b = 2;
  }

  o.c = 3;

  print(o.a, 1);
  print(o.b, 2);
  print(o.c, 3);
}

function condition4(b) {
  var o = {a: 1};

  o.bla = 2;
  o.bla2 = 2;
  o.bla3 = 2;
  o.bla4 = 2;

  if (b) {
    o.b = 2;
  } else {
    o.c = 2;
  }

  o.d = 3;

  print(o.a, 1);
  if (b) {
    print(o.b, 2);
    print('c' in o, false);
  } else {
    print('b' in o, false);
    print(o.c, 2);
  }
  print(o.d, 3);
}

function f() {
  for (var i = 0; i < 10; i++) {
    simple();
    condition1(i % 2 == 0)
    condition2(i % 2 == 0)
    condition3(i % 2 == 0)
    condition4(i % 2 == 0)
  }
}

for (var i = 0; i < 10; i++) {
  f();
}
