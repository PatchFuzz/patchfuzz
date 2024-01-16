



function f(a, b) {
  for (var i = 10000; i > 0; i--) {
    arguments[i] = 0;
  }
}

f(1.5, 2.5);
