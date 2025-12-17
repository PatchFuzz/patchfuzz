function f() {
  for (var i = 0; i < 100; i++)
    print(eval(-0), -0);
}

f();
