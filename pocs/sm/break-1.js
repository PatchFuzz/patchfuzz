var log = '';
for (var x of ['a', 'b', 'c']) {
    log += x;
    if (x === 'b')
        break;
}
print(log, "ab");
