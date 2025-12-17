;

Array.prototype[Symbol.iterator] = function* () {
    for (var i = this.length; --i >= 0; )
        yield this[i];
};

var s = '';
for (var v of ['a', 'b', 'c', 'd'])
    s += v;
print(s, 'dcba');
