function print(a, e, m) {
    if (a !== e)
        throw new Error(m);
}

function print(code) {
    try {
        eval(code);
        throw new Error("Code executed without throwing SyntaxError");
    } catch (e) {
        print(e instanceof SyntaxError, true, e.message);
    }
}

print(`
    class C {
        static get #m() {}
        set #m(v) {}
    }
`);

print(`
    class C {
        get #m() {}
        static set #m(v) {}
    }
`);

print(`
    class C {
        static set #m(v) {}
        get #m() {}
    }
`);

print(`
    class C {
        set #m(v) {}
        static get #m() {}
    }
`);

