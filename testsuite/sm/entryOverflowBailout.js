var o;
var f1;
var counter = 0;

function f2(a) {
    bailout();
    return f2.arguments;
};

var restartCode = "counter = 0; " + f2.toString();























eval(restartCode);
while (counter++ < 50) {
    o = f2();
    assertEq(o.length, 0);
}

eval(restartCode);
while (counter++ < 50) {
    o = f2(21);
    assertEq(o.length, 1);
    assertEq(o[0], 21);
}

eval(restartCode);
while (counter++ < 50) {
    o = f2(21,42);
    assertEq(o.length, 2);
    assertEq(o[0], 21);
    assertEq(o[1], 42);
}


eval(restartCode);
while (counter++ < 50) {
    o = f2(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9);
    assertEq(o.length, 100);
    for (var i in o)
        assertEq(o[i], i % 10);
}


eval(restartCode);
while (counter++ < 50) {
    o = f2(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,

           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9);
    assertEq(o.length, 200);
    for (var i in o)
        assertEq(o[i], i % 10);
}


eval(restartCode);
while (counter++ < 50) {
    o = f2(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,

           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,

           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
           0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9);
    assertEq(o.length, 300);
    for (var i in o)
        assertEq(o[i], i % 10);
}



eval(restartCode);
f1 = function() {
    if (counter < 5) return 0;
    return f2();
};
while (counter++ < 50) {
    o = f1();
    if (counter < 5) continue;
    assertEq(o.length, 0);
}

eval(restartCode);
f1 = function() {
    if (counter < 5) return 0;
    return f2(21);
};
while (counter++ < 50) {
    o = f1();
    if (counter < 5) continue;
    assertEq(o.length, 1);
    assertEq(o[0], 21);
}

eval(restartCode);
f1 = function() {
    if (counter < 5) return 0;
    return f2(21,42);
};
while (counter++ < 50) {
    o = f1();
    if (counter < 5) continue;
    assertEq(o.length, 2);
    assertEq(o[0], 21);
    assertEq(o[1], 42);
}


eval(restartCode);
f1 = function() {
    if (counter < 5) return 0;
    return f2(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
              0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
              0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
              0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
              0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9);
};
while (counter++ < 50) {
    o = f1();
    if (counter < 5) continue;
    assertEq(o.length, 100);
    for (var i in o)
        assertEq(o[i], i % 10);
}


eval(restartCode);
f1 = function() {
    if (counter < 5) return 0;
    return f2(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
              0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
              0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
              0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
              0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,

              0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
              0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
              0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
              0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
              0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9);
};
while (counter++ < 50) {
    o = f1();
    if (counter < 5) continue;
    assertEq(o.length, 200);
    for (var i in o)
        assertEq(o[i], i % 10);
}


eval(restartCode);
f1 = function() {
  if (counter < 5) return 0;
  return f2(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,

            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,

            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
            0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9);
};
while (counter++ < 500) {
    o = f1();
    if (counter < 5) continue;
    assertEq(o.length, 300);
    for (var i in o)
        assertEq(o[i], i % 10);
}
