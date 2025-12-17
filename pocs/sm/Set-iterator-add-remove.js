var set = new Set(['a']);
var n = 5;
for (let v of set) {
    print(v, 'a');
    if (n === 0)
        break;
    set.delete('a');
    set.add('a');
    n--;
}
print(n, 0);
