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

Object.prototype[0] = 50;
for (let i = 0; i < testLoopCount; i++)
    print(foo() === 50);
