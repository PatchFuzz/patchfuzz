;



Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

var s;
function test() {
    for (var v of arguments)
        s += v;
}

s = '';
test();
print(s, '');

s = '';
test('x', 'y');
print(s, 'xy');
