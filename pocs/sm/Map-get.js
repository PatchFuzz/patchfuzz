var m = new Map;

function rope() {
    var s = "s";
    for (var i = 0; i < 16; i++)
        s += s;
    return s;
}

var keys = [undefined, null, true, false,
            0, 1, 65535, 65536, 2147483647, 2147483648, 4294967295, 4294967296,
            -1, -65536, -2147483648,
            0.5, Math.sqrt(81), Math.PI,
            Number.MAX_VALUE, -Number.MAX_VALUE, Number.MIN_VALUE, -Number.MIN_VALUE,
            NaN, Infinity, -Infinity,
            "", "\0", "a", "ab", "abcdefg", rope(),
            {}, [], /a*b/, Object.prototype, Object];

for (var i = 0; i < keys.length; i++) {
    
    var key = keys[i];
    print(m.has(key), false);
    print(m.get(key), undefined);

    
    var v = {};
    print(m.set(key, v), m);
    print(m.has(key), true);
    print(m.get(key), v);

    
    print(m.delete(key), true);
    print(m.has(key), false);
    print(m.get(key), undefined);

    m.set(key, v);
}

for (var i = 0; i < keys.length; i++)
    print(m.has(keys[i]), true);
