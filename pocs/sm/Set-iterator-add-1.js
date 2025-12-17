var set = new Set([5]);
var log = '';
for (let x of set) {
    log += x + ';';
    if (x > 0)
        set.add(x - 1);
}
print(log, '5;4;3;2;1;0;');
print(set.size, 6);
