function print(a) {
    if (!a)
        throw Error("bad assertion");
}

function testRegexpInline(functor) {
    for (let i = 0; i < testLoopCount; i++) {
        functor();
    }

    gc();

    
    for (let i = 0; i < 10000000; i++) {
        let a = {value: i};
    }

    
    for (let i = 0; i < 100; i++) {
        functor();
    }
}

function toInlineGlobal() {
    var re = /cc+/;

    print(re.test("ccc"));
    print(!re.test("abc"));
    return 0;
}

function withRegexp() {
    toInlineGlobal();
    var re = /(ab)+/;
    print(re.test("ab"));
    print(!re.test("ba"));
    return 0;
}

noInline(withRegexp);

testRegexpInline(withRegexp);

function inlineRegexpNotGlobal() {
    let toInline = () => {
        let re = /a+/;

        print(re.test("aaaaaa"));
        print(!re.test("bc"));
    }

    toInline();
}

noInline(inlineRegexpNotGlobal);

testRegexpInline(inlineRegexpNotGlobal);

function toInlineRecursive(depth) {
    if (depth == 5) {
        return;
    }

    var re = /(ef)+/;

    print(re.test("efef"));
    print(!re.test("abc"));
    
    toInlineRecursive(depth + 1);
}

function regexpContainsRecursive() {
    var re = /r+/;
    toInlineRecursive(0);

    print(re.test("r"));
    print(!re.test("ab"));
}
noInline(regexpContainsRecursive);

testRegexpInline(regexpContainsRecursive);

