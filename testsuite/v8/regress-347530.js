




a = [];
a[1000] = .1;
a.length = 0;
gc();
gc();
a[1000] = .1;
assertEquals(.1, a[1000]);
