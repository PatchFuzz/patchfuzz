function print(b) {
    if (!b)
        throw new Error;
}
noInline(print);

function foo(...args) {
    return args[0];
}
noInline(foo);

for (let i = 0; i < testLoopCount; i++) {
    
    if (i % 2)
        print(foo(i) === i);
    else
        print(foo() === undefined);
}

let newProto = [50];
newProto.__proto__ = null;

Array.prototype.__proto__ = newProto;
for (let i = 0; i < testLoopCount; i++)
    print(foo() === 50);
