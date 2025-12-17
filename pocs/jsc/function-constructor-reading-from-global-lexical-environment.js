function print(b, m) {
    if (!b)
        throw new Error(m);
}

function test(f, iters = 1000) {
    noInline(f);
    for (let i = 0; i < iters; i++)
        f(i);
}

const globalConst = {};
class GlobalClass { }
let globalLet = {};
let f = new Function("", "return globalConst;");
test(function() {
    print(f() === globalConst);
});

f = new Function("", "return GlobalClass;");
test(function() {
    let ctor = f();
    print(ctor === GlobalClass);
    print((new GlobalClass) instanceof GlobalClass);
});


f = new Function("", "return globalLet;");
test(function() {
    print(f() === globalLet);
});

f = new Function("prop", "x", "globalLet[prop] = x;");
test(function(i) {
    f(i, i);
    print(globalLet[i] === i);
});

f = new Function("prop", "x", "globalConst[prop] = x;");
test(function(i) {
    f(i, i);
    print(globalConst[i] === i);
});

f = new Function("", "globalConst = 25");
test(function() {
    let threw = false;
    try {
        f();
    } catch(e) {
        threw = true;
        print(e.toString() === "TypeError: Attempted to assign to readonly property.")
    }
    print(threw);
});

f = new Function("", "globalConst = 25");
test(function() {
    let threw = false;
    try {
        f();
    } catch(e) {
        threw = true;
        print(e.toString() === "TypeError: Attempted to assign to readonly property.")
    }
    print(threw);
});

f = new Function("", "constTDZ = 25");
test(function() {
    let threw = false;
    try {
        f();
    } catch(e) {
        threw = true;
        print(e.toString() === "ReferenceError: Cannot access 'constTDZ' before initialization.")
    }
    print(threw);
});

f = new Function("", "constTDZ;");
test(function() {
    let threw = false;
    try {
        f();
    } catch(e) {
        threw = true;
        print(e.toString() === "ReferenceError: Cannot access 'constTDZ' before initialization.")
    }
    print(threw);
});

f = new Function("", "letTDZ;");
test(function() {
    let threw = false;
    try {
        f();
    } catch(e) {
        threw = true;
        print(e.toString() === "ReferenceError: Cannot access 'letTDZ' before initialization.")
    }
    print(threw);
});

f = new Function("", "letTDZ = 20;");
test(function() {
    let threw = false;
    try {
        f();
    } catch(e) {
        threw = true;
        print(e.toString() === "ReferenceError: Cannot access 'letTDZ' before initialization.")
    }
    print(threw);
});

f = new Function("", "ClassTDZ");
test(function() {
    let threw = false;
    try {
        f();
    } catch(e) {
        threw = true;
        print(e.toString() === "ReferenceError: Cannot access 'ClassTDZ' before initialization.")
    }
    print(threw);
});


const constTDZ = 25;
let letTDZ = 25;
class ClassTDZ { }

