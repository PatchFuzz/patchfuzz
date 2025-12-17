var arr = [["a"], ["b"], ["c"]];
var m = new Map(arr);
print(m.size, 3);
for (var [k, _] of arr) {
    print(m.has(k), true);
    print(m.get(k), undefined);
}
