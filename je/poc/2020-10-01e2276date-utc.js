













var d;

d = Date.UTC(undefined);
print(isNaN(d));

d = Date.UTC({});
print(isNaN(d));

d = Date.UTC(2000 + 15, 0);
print(d == 1420070400000);

d = Date.UTC(2015, 0);
print(d == 1420070400000);

d = Date.UTC(2015, 0, 1);
print(d == 1420070400000);

d = Date.UTC(2015, 0, 1, 0);
print(d == 1420070400000);

d = Date.UTC(2015, 0, 1, 0, 0);
print(d == 1420070400000);

d = Date.UTC(2015, 0, 1, 0, 0, 0);
print(d == 1420070400000);

d = Date.UTC(2015, 0, 1, 0, 0, 0, 0);
print(d == 1420070400000);

d = Date.UTC(2015, 6, 3, 14, 35, 43, 123);
print(d == 1435934143123);
