var s = '';

var a = [, 0, 1];
for (var i in a) {
    a.reverse();
    s += i + ',';
}


assertEq(s, '1,');

