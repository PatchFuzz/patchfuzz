function foo(o, a) {
    let x = o.g;
    let y = o.y;
    try {
        o.f = 20;
    } catch(e) {
        return x + y + 1;
    }
    return x + y;
}

function print(b) {
    if (!b)
        throw new Error("bad value")
}
noInline(print);

noInline(foo);
var flag = false;
function f(arg1, arg2, arg3) {
    if (flag)
        throw new Error("blah")
    return arg1;
}
noInline(f);
let o1 = {
    g: 20,
    y: 40,
    f: null
};

let o2 = {
    g: "g",
    y: "y",
    set f(v) { if (flag) throw new Error("blah"); }
}

for (let i = 0; i < testLoopCount; i++) {
    if (i % 2) {
        print(foo(o1) === 60);
    } else {
        print(foo(o2) === "gy");
    }
}
flag = true;
print(foo(o2) === "gy1");
