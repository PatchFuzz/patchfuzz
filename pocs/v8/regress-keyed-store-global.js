function f(a) {
  for (var i = 0; i < 256; i++) a[i] = i;
}

f([]);
f([]);
f(this);
