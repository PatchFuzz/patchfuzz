var a = 10;
function f1(a,
            [b=(print(a, 1), a=2, 42)],
            {c:c=(print(a, 2), a=3, 43)}) {
  print(a, 3);
  print(b, 42);
  print(c, 43);
}
f1(1, [], {});
print(a, 10);
