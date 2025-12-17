function print(x) { print(x) }

let a = 'global';

for (let a = 'for'; f = function() { a += ' loop' }; ) {
    f();
    print(a);
    break;
}
print(a);

for (let a in this) {
    let f = function() { a = 'for-in loop'; };
    f();
    print(a);
    break;
}
print(a);

try { eval('for (let a = 123 in this) { }'); print('fail'); } catch (e) { print(e); }
try { eval('for (const a = 123 in this) { }'); print('fail'); } catch (e) { print(e); }
try { eval('function foo() { for (let a = 123 in this) { } } foo();'); print('fail'); } catch (e) { print(e); }
try { eval('function foo() { for (const a = 123 in this) { } } foo();'); print('fail'); } catch (e) { print(e); }
try { eval('function foo() { { for (var a = 123 in []) { } let a; } } foo();'); print('fail'); } catch (e) { print(e); }

function test3() {
    eval('');

    v2;
    let v1;
    for (let v2; false;) {
        
        
        var v2 = 0;
    }
}
test3();


function for_in() {
    for (const x in {a:'a',b:'b'}) {
        print(x);
    }
}
for_in();

function for_of() {
    for (const x of ['a', 'b']) {
        print(x);
    }
}
for_of();


try { eval('for (const x; x < 0;) { print(x); }'); } catch (e) { print(e); }
