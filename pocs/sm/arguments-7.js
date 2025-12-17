;

Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

var s;
function f() {
    for (var v of arguments) {
        s += v;
        arguments.length--;
    }
}

s = '';
f('a', 'b', 'c', 'd', 'e');
print(s, 'abc');
