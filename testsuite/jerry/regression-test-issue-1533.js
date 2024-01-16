













var a = [];

for (var i = 0; i < 200; ++i)
  a[i] = 5;

for (var i = 0; i < 200; ++i)
  a[i] = a[i] + 5;

for (var i = 0; i < 200; ++i)
  delete a[i]

a[0] = 5

a = [];

for (var i = 0; i < 200; ++i)
  a[i] = 5;

a.length = 0

for (var i = 0; i < 200; ++i)
  a[i] = 5;
