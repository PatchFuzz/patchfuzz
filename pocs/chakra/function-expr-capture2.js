eval(
    '(function f() {' +
    '     with({}) {' +
    '         (function () {' +
    '             return f;' +
    '         })();' +
    '     }' +
    ' }());'
);

print('pass');
