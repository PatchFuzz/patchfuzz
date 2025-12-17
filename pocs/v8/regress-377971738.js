let x = 0;

function foo(a) {
  eval();
  x = a;
}

print(undefined, foo());
print(undefined, foo());
