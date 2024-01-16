function assert(b) {
    if (!b)
        throw new Error;
}
noInline(assert);

function foo(...args) {
    return args[0];
}
noInline(foo);

for (let i = 0; i < 10000; i++) {
    
    if (i % 2)
        assert(foo(i) === i);
    else
        assert(foo() === undefined);
}

let newProto = [50];
newProto.__proto__ = null;

Array.prototype.__proto__ = newProto;
for (let i = 0; i < 10000; i++)
    assert(foo() === 50);
