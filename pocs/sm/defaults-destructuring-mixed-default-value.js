function f1(a=1,
            [b, c=(print(a, 2), a=3, 42)]=[(print(a, 1), a=2, 43)],
            {d, e:e=(print(a, 4), a=5, 44)}={d: (print(a, 3), a=4, 45)},
            f=(print(a, 5), a=6, 46)) {
  print(a, 6);
  print(b, 43);
  print(c, 42);
  print(d, 45);
  print(e, 44);
  print(f, 46);
}
print(f1.length, 0);
f1();

function f2(a=1,
            [b, c=print(false)]=[(print(a, 1), a=2, 42), (print(a, 2), a=3, 43)],
            {d, e:e=print(false)}={d: (print(a, 3), a=4, 44), e: (print(a, 4), a=5, 45)},
            f=(print(a, 5), a=6, 46)) {
  print(a, 6);
  print(b, 42);
  print(c, 43);
  print(d, 44);
  print(e, 45);
  print(f, 46);
}
print(f2.length, 0);
f2();

function f3(a=1,
            [b, c=(print(a, 1), a=2, 42)]=[print(false)],
            {d, e:e=(print(a, 2), a=3, 43)}={d: print(false)},
            f=(print(a, 3), a=4, 44)) {
  print(a, 4);
  print(b, 8);
  print(c, 42);
  print(d, 9);
  print(e, 43);
  print(f, 44);
}
print(f3.length, 0);
f3(undefined, [8], {d: 9});

function f4(a=1,
            [b, c=print(false)]=[print(false), print(false)],
            {d, e:e=print(false)}={d: print(false), e: print(false)},
            f=(print(a, 1), a=2, 42)) {
  print(a, 2);
  print(b, 8);
  print(c, 9);
  print(d, 10);
  print(e, 11);
  print(f, 42);
}
print(f4.length, 0);
f4(undefined, [8, 9], {d: 10, e: 11});
