function print(b) {
    if (!b)
        throw new Error("Bad!");
}
noInline(print);

function f1() { return "f1"; }
noInline(f1);
function f2() { return "f2"; }
noInline(f2);
function f3() { return "f3"; }
noInline(f3);

let oException = {
    valueOf() { throw new Error(""); }
};

function foo(arg1, arg2) {
    let a = f1();
    let b = f2();
    let c = f3();
    try {
        arg1 + arg2;
    } catch(e) {
        print(arg1 === oException);
        print(arg2 === oException);
    }
    print(a === "f1");
    print(b === "f2");
    print(c === "f3");
}
noInline(foo);

for (let i = 0; i < 1000; i++) {
    foo(i, {});
    foo({}, i);
}
foo(oException, oException);
for (let i = 0; i < testLoopCount; i++) {
    foo(i, {});
    foo({}, i);
}
foo(oException, oException);


function ident(x) { return x; }
noInline(ident);

function bar(arg1, arg2) {
    let a = f1();
    let b = f2();
    let c = f3();
    let x = ident(arg1);
    let y = ident(arg2);

    try {
        arg1 + arg2;
    } catch(e) {
        print(arg1 === oException);
        print(arg2 === oException);
        print(x === oException);
        print(y === oException);
    }
    print(a === "f1");
    print(b === "f2");
    print(c === "f3");
}
noInline(bar);

for (let i = 0; i < 1000; i++) {
    bar(i, {});
    bar({}, i);
}
bar(oException, oException);
for (let i = 0; i < testLoopCount; i++) {
    bar(i, {});
    bar({}, i);
}
bar(oException, oException);
