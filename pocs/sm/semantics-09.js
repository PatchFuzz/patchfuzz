var s;
function f() {
    s += 'f';
    return {};
}


s = '';
for (f().x of [])
    s += '.';
print(s, '');


function* g() {
    s += 'g';
    yield 0;
    s += 'g';
    yield 1;
    s += 'g';
}
for (f().x of g())
    s += '.';
print(s, 'gf.gf.g');
