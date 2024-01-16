




function assert(b) {
    if (!b) {
        print('fail');
    }
}

let p1 = new RegExp('^[a-z]{2,2147483648}$');
assert(!p1.test('a'));

let p2 = /^[a-z]{2,2147483648}$/;
assert(p2.test('aaaaa'));

print('PASS');
