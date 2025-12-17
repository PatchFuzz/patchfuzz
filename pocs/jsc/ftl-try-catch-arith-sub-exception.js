function print(b) {
    if (!b)
        throw new Error("uh oh");
}

let flag = false;
let o = {
    valueOf() {
        if (flag)
            throw new Error("by by");
        return 13.5;
    }
};
noInline(o.valueOf);

function baz() { return 1.5; }
noInline(baz);

function foo(x, o) {
    let r = baz();
    try {
        r = x - o - r;
    } catch(e) { }
    return r;
}
noInline(foo);

let x = 20.5;
for (let i = 0; i < testLoopCount; i++) {
    print(foo(x, o) === 5.5);
}
flag = true;
print(foo(x, o) === 1.5);


function bar(x, o) {
    let caughtException = false;
    var r = null;
    try {
        
        
        
        r = x - o;
    } catch(e) {
        caughtException = true;
        print(r === null);
    }
    if (!caughtException)
        print(r === 7);
    return caughtException;
} 
noInline(bar);

flag = false;
for (let i = 0; i < testLoopCount; i++) {
    print(bar(x, o) === false);
}
flag = true;
print(bar(x, o) === true);
