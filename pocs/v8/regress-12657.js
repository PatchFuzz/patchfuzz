const a = new Array();
for (var i = 0; i < 50000; i++) {
  a[i] = new Object();
}
print(getV8Statistics().new_space_commited_bytes <= 2 * 1024 * 1024);
