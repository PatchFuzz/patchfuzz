

var s;
function f() {
    s += 'f';
    return {};
}


s = '';
for (f().x of [])
    s += '.';
assertEq(s, '');


function* g() {
    s += 'g';
    yield 0;
    s += 'g';
    yield 1;
    s += 'g';
}
for (f().x of g())
    s += '.';
assertEq(s, 'gf.gf.g');
