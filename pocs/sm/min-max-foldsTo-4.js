with ({}); 

function f(x) {
  return Math.min(Math.max(x / x, x), x);
}

for (var i = 0; i < 100; ++i) {
  f(1);
}

print(f(0), NaN);
