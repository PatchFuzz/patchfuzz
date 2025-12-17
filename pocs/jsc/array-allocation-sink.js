function print(actual, expected) {
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] != expected[i])
            throw new Error("bad actual=" + actual[i] + " but expected=" + expected[i]);
    }
}

function run(func, a) {
    let expected;
    for (let i = 0; i < testLoopCount; i++) {
        if (a == undefined)
            a = [1, 2];
        let res = func(a);
        if (i == 0)
            expected = res;
        print(res, expected);
    }
}

{
    function test(s) {
        let a = new Array(4); 
        a[0] = 43; 
        s[0] = a[0];

        var q = { f: s[1] ? a : 42 }; 
        return s;
    }
    noInline(test);
    run(test);
}

{
    function test(s) {
        let a = new Array(4); 
        a[0] = s[1] & 0x8; 
        s[0] = a[0];

        var q = { f: s[1] ? a : 42 }; 
        return s;
    }
    noInline(test);
    run(test);
}

{
    function test(s) {
        let a = new Array(4); 
        a[0] = s[1]; 
        s[0] = a[0];

        var q = { f: s[1] ? a : 42 }; 
        return s;
    }
    noInline(test);
    run(test);
}

{
    function test(s) {
        let a = new Array(4); 
        a[0] = s[1]; 
        s[0] = a[0];

        var q = { f: s[1] ? a : 42 }; 
        return s;
    }
    noInline(test);
    run(test, [0.1, 0.2]);
}

{
    function test(s) {
        let a = new Array(4); 
        a[0] = { f: 10 }; 
        s[0] = a[0];

        var q = { f: s[1] ? a : 42 }; 
        return s;
    }
    noInline(test);
    run(test, [0.1, 0.2]);
}

{
    function test(s) {
        let a = new Array(4); 
        a[0] = 42;
        a.length = 10; 
        s[0] = a[0];
        return s;
    }
    noInline(test);
    run(test);
}

{
    function test(s) {
        let a = new Array(4); 
        a[0] = 42;
        s[1] = a.length;
        s[0] = a[0];
        return s;
    }
    noInline(test);
    run(test);
}

{
    function test(s) {
        let a = new Array(4); 
        a[0] = 42;
        s[0] = a[0];
        return s;
    }
    noInline(test);
    run(test);
}

{
    function test(s) {
        Array[Symbol.species] = 99; 
        let a = new Array(4); 
        a[0] = 42;
        s[0] = a[0];
        return s;
    }
    noInline(test);
    run(test);
}

{
    function test(s) {
        let a = new Array(4); 
        a[0] = 42;
        s[0] = a[0];
        globalThis.ref = a; 
        return s;
    }
    noInline(test);
    run(test);
}

{
    function test(s) {
        Array.prototype[2] = 99; 
        let a = new Array(4); 
        a[0] = 42;
        s[0] = a[2];
        return s;
    }
    noInline(test);
    run(test);
}

{
    function test(s) {
        let a = new Array(4); 
        a[0] = 42;
        s[0] = a[0];
        let sliced = a.slice();  
        let mapped = a.map(x => x * 2);  
        return s;
    }
    noInline(test);
    run(test);
}

{
    function test(s) {
        let a = new Array(4); 
        a[10] = 42;  
        s[0] = a[0];
        return s;
    }
    noInline(test);
    run(test);
}


