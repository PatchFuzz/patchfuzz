





function f(a, i, v) {
  a[i] = v;
}

f("make it generic", 0, 0);

var a = new Array(3);

f(a, "length", 2);
assertEquals(2, a.length);


%OptimizeObjectForAddingMultipleProperties(a, 1);
f(a, "length", 1);
assertEquals(1, a.length);
