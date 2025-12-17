let oThrow = {
    g: 0,
    get f() {
        throw new Error();
    }
};

function foo(x, j) {
    let o = f(x, j);
    try {
        o = o.f;
    } catch (e) {
        gc();
        o === 0;
    }
}

noInline(foo);

function f(x, j) {
    if (x) {
        return oThrow;
    }
    if (j % 2) {
        return {};
    }
    return {
        get f() {}
    };
}

noInline(f);

for (let i = 0; i < 20000; i++) {
    foo(false, i);
}

foo(true);
