print(undefined == undefined, 1);
print(undefined <= undefined, 2);
print(undefined >= undefined, 3);
print(undefined < undefined, 4);
print(undefined > undefined, 5);

print(null == null, 6);
print(null <= null, 7);
print(null >= null, 8);
print(null < null, 9);
print(null > null, 10);

print(void 0 == void 0, 11);
print(void 0 <= void 0, 12);
print(void 0 >= void 0, 13);
print(void 0 < void 0, 14);
print(void 0 > void 0, 15);

var x = void 0;

print(x == x, 16);
print(x <= x, 17);
print(x >= x, 18);
print(x < x, 19);
print(x > x, 20);

var not_undefined = [null, 0, 1, 1/0, -1/0, "", true, false];
for (var i = 0; i < not_undefined.length; i++) {
  x = not_undefined[i];

  print(x == x, "" + 21 + x);
  print(x <= x, "" + 22 + x);
  print(x >= x, "" + 23 + x);
  print(x < x, "" + 24 + x);
  print(x > x, "" + 25 + x);
}
