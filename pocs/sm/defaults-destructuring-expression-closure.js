function f1(a, bIs, cIs, dIs, {b}={b: 3}, c=4, [d]=[5]) {
  print(a, 1),
  print(b, bIs),
  print(c, cIs),
  print(d, dIs)
}
print(f1.length, 4);
f1(1, 3, 4, 5);
f1(1, 42, 43, 44, {b: 42}, 43, [44]);

let f2 = (a, bIs, cIs, dIs, {b}={b: 3}, c=4, [d]=[5]) => (
  print(a, 1),
  print(b, bIs),
  print(c, cIs),
  print(d, dIs)
);
print(f2.length, 4);
f2(1, 3, 4, 5);
f2(1, 42, 43, 44, {b: 42}, 43, [44]);
