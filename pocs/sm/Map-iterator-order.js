;

var map = new Map();
for (var i = 7; i !== 1; i = i * 7 % 1117)
    map.set("" + i, i);
print(map.size, 557);

i = 7;
for (var pair of map) {
    print(pair, ["" + i, i]);
    i = i * 7 % 1117;
}
print(i, 1);
