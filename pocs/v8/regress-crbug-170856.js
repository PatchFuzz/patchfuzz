r = new RegExp("a");
for (var i = 0; i < 100; i++) {
  r["abc" + i] = i;
}
"zzzz".replace(r, "");
print(0, r.lastIndex);
