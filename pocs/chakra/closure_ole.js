function f(a) {
    return (function () {
        return { a };
    });
}

var o = f()();
if (o.a !== undefined) {
    print('fail 1: o.a === ' + o.a);
}
o = f('a')();
if (o.a !== 'a') {
    print('fail 2: o.a === ' + o.a);
}
print('pass');
