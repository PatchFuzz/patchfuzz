var set = new Set();
var i;
for (i = 7; i !== 1; i = i * 7 % 1117)
    set.add(i);
print(set.size, 557);

i = 7;
for (var v of set) {
    print(v, i);
    i = i * 7 % 1117;
}
print(i, 1);
