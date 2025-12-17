function print(actual, expected) {
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] != expected[i])
            throw new Error("bad actual=" + actual[i] + " but expected=" + expected[i]);
    }
}

function func1(a) {
    for (let i = 0; i < 4;) {
        a[i] = 1;
        
        
        if (print()) OSRExit();
        i++;
    }
    return a;
}
noInline(func1);

function func2(a) {
    for (let i = 0; i < 4;) {
        a[i] = 1;
        i++;
        if (print()) OSRExit();
    }
    return a;
}
noInline(func2);

function func3(a) {
    for (let i = 0; i < 4;) {
        if (print()) OSRExit();
        a[i] = 1;
        i++;
    }
    return a;
}
noInline(func3);

function test(func) {
    let expected;
    for (let i = 0; i < testLoopCount; i++) {
        let a = [0, 0, 0, 0];
        let res = func(a);
        if (i == 0)
            expected = res;
        print(res, expected);
    }
}

test(func1);



