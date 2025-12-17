function print(b) {
    if (!b)
        throw new Error("bad value")
}
noInline(print);

function random() { 
    return "blah";
}
noInline(random);

function identity(x) { 
    return x;
}
noInline(identity);

let o1 = {
    g: 20,
    y: 40,
    f: "get f"
};

let o2 = {
    g: "g",
    y: "y",
    get f() { 
        return "get f";
    }
}

let o4 = {};

let o3 = {
    get f() {
        throw new Error("blah"); 
    }
}

function foo(o, a) {
    let x = o.g;
    let y = o.y;
    let oo = identity(o);
    let j = random();
    try {
        j = o.f;
    } catch(e) {
        print(j === "blah");
        print(oo === o3);
        return x + y + 1;
    }
    return x + y;
}

noInline(foo);
for (let i = 0; i < testLoopCount; i++) {
    if (i % 3 == 0) {
        print(foo(o1) === 60);
    } else if (i % 3 === 1) {
        print(foo(o2) === "gy");
    } else {
        foo(o4);
    }
}

foo(o3);
