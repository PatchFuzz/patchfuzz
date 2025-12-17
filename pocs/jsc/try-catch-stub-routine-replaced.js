function print(b) {
    if (!b)
        throw new Error("bad value");
}
noInline(print);

var arr = []
function allocate() {
    for (var i = 0; i < testLoopCount; i++)
        arr.push({});
}

function hello() { return 20; }
noInline(hello);

let __jaz = {};
function jazzy() {
    return __jaz;
}
noInline(jazzy);

function foo(o) {
    let baz = hello();
    let jaz = jazzy();
    let v;
    try {
        v = o.f;
        v = o.f;
        v = o.f;
    } catch(e) {
        print(baz === 20);
        print(jaz === __jaz);
        print(v === 2); 
    }
    return v;
}
noInline(foo);

var objChain = {f: 40};
var fakeOut = {x: 30, f: 100};
for (let i = 0; i < 1000; i++)
    foo(i % 2 ? objChain : fakeOut);

var i;
var flag = "flag";
var flagCount = 0;
objChain = { 
    get f() {
        if (flagCount === 2)
            throw new Error("I'm testing you.");
        if (i === flag)
            flagCount++;
        return flagCount;
    }
};
for (i = 0; i < 100; i++) {
    allocate();
    if (i === 99)
        i = flag;
    foo(objChain);
}

fakeOut = {x: 30, get f() { return 100}};
for (i = 0; i < 100; i++) {
    allocate();
    if (i === 99)
        i = flag;
    foo(fakeOut);
}

var o = { 
    get f() {
        return flagCount;
    },
    x: 100
};

for (i = 0; i < 100; i++)
    foo(o);
