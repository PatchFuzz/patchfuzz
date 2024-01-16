

var set = new Set(['a', 'b', 'c']);
var log = '';

for (let i = 0; i < 2; i++) {
    for (let x of set)
        log += x;
    log += ';'
}
assertEq(log, 'abc;abc;');
