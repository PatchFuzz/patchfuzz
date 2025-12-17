var a = [1,2,3,4,5];


function foo(x, n) {
  var v = 0;
  for (var i = 0; i < n; i++)
    v += x[i];
  return v;
}
for (var i = 0; i < 15; i++)
  print(foo(a, 5), 15);
print(foo(a, 6), NaN);


function foo2(x, m, n) {
  var v = 0;
  for (var i = m; i < n; i++)
    v += x[i];
  return v;
}
for (var i = 0; i < 15; i++)
  print(foo2(a, 0, 5), 15);
print(foo2(a, -1, 5), NaN);


function foo3(x, m, n) {
  var v = 0;
  for (var i = m; i < n; i++)
    v += x[i] + x[i + 1] + x[i + 2];
  return v;
}
for (var i = 0; i < 15; i++)
  print(foo3(a, 0, 3), 27);
print(foo3(a, 0, 4), NaN);


function foo4(x, m, n) {
  var v = 0;
  for (var i = m; i < n; i++)
    v += x[i] + x[i - 1] + x[i - 2];
  return v;
}
for (var i = 0; i < 15; i++)
  print(foo4(a, 2, 5), 27);
print(foo4(a, 0, 5), NaN);


function foo5(x, n) {
  var v = 0;
  for (var i = 0; i < n; i++) {
    v += x[i];
    if (n == 4)
      i -= 2;
    if (i == -5)
      break;
  }
  return v;
}
for (var i = 0; i < 15; i++)
  print(foo5(a, 5), 15);
print(foo5(a, 4), NaN);


function foo6(x, m, n) {
  var v = 0;
  for (var i = m; i < n; i++)
    v += x[i + 10];
  return v;
}
for (var i = 0; i < 15; i++)
  print(foo6(a, -10, -5), 15);
print(foo6(a, -10, -4), NaN);


function foo7(x, m, n) {
  var v = 0;
  for (var i = m; i < n; i++)
    v += x[i + 10];
  return v;
}
for (var i = 0; i < 15; i++)
  print(foo7(a, -10, -5), 15);
print(foo7(a, -11, -5), NaN);
