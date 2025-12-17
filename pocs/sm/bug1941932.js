let o = new Uint8Array(10);
o.prop = 0;

function has(k) { return Object.hasOwn(o, k); }

for (var i = 0; i < 100; i++) {
  print(has("prop"), true);
  print(has("a"), false);
  print(has("b"), false);
  print(has("c"), false);
  print(has("d"), false);
  print(has("e"), false);
  print(has("f"), false);
}

print(has("5"), true);
print(has("11"), false);
