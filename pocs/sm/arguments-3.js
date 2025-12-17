;

Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

var s;
function test() {
    "use strict";
    for (var v of arguments)
        s += v;
}

s = '';
test();
print(s, '');

s = '';
test('a', 'b');
print(s, 'ab');
