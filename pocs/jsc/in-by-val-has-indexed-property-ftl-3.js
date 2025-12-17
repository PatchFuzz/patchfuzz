function print(b) {
    if (!b)
        throw new Error;
}

function test1() {
    function func(b, o) {
        if (b)
            return 2 in o;
        return false;
    }
    noInline(func);

    let o = {__proto__:[0, 1]};
    o[3] = 42;

    for (let i = 0; i < 100; ++i) {
        func(true, o);
        func(false, o);
    }

    for (let i = 0; i < testLoopCount; ++i) {
        print(!func(false, o));
    }
    print(!func(true, o));
}
test1();

function test2() {
    function func(b, o) {
        if (b)
            return 2 in o;
        return false;
    }
    noInline(func);

    let o = {__proto__:[0, 1]};
    o[3] = {};

    for (let i = 0; i < 100; ++i) {
        func(true, o);
        func(false, o);
    }

    for (let i = 0; i < testLoopCount; ++i) {
        print(!func(false, o));
    }
    print(!func(true, o));
}
test2();

function test3() {
    function func(b, o) {
        if (b)
            return 2 in o;
        return false;
    }
    noInline(func);

    let o = {__proto__:[0, 1]};
    o[3] = 42.2;

    for (let i = 0; i < 100; ++i) {
        func(true, o);
        func(false, o);
    }

    for (let i = 0; i < testLoopCount; ++i) {
        print(!func(false, o));
    }
    print(!func(true, o));
}
test3();

function test4() {
    function func(b, o) {
        if (b)
            return 2 in o;
        return false;
    }
    noInline(func);

    let o = {__proto__:[0, 1]};
    o[3] = {};
    print(o);

    for (let i = 0; i < 100; ++i) {
        func(true, o);
        func(false, o);
    }

    for (let i = 0; i < testLoopCount; ++i) {
        print(!func(false, o));
    }
    print(!func(true, o));
}
test4();
