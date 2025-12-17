function print(b) {
    if (!b) {
        print('fail');
    }
}

let p1 = new RegExp('^[a-z]{2,2147483648}$');
print(!p1.test('a'));

let p2 = /^[a-z]{2,2147483648}$/;
print(p2.test('aaaaa'));

print('PASS');
