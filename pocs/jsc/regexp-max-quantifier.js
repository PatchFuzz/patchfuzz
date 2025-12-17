function print(a) {
    if (!a)
        throw new Error();
}

function shouldThrow(expectedError, func, message) {
    var error = null;
    try {
        func();
    } catch (e) {
        error = e;
    }
    if (!error)
        throw new Error("Not thrown");
    if (!(error instanceof expectedError))
        throw new Error(`Expected "${expectedError.name}" but got "${error.name}"`);
    if (error.message !== message)
        throw new Error(`Expected message "${message}" but got "${error.message}"`);
}

{
    
    var re1 = new RegExp("b{9007199254740991}", "u");
    print(!re1.test(""));

    var re2 = new RegExp("b{9007199254740991,}?");
    print(!re2.test("a"));

    var re3 = new RegExp("b{9007199254740991,9007199254740991}");
    print(!re3.test("b"));
}

{
    
    var re1 = new RegExp("b{9007199254740992}", "u");
    print(!re1.test(""));

    var re2 = new RegExp("b{9007199254740992,}?");
    print(!re2.test("a"));

    var re3 = new RegExp("b{9007199254740992,9007199254740992}");
    print(!re3.test("b"));
}

{
    
    var re1 = new RegExp("b{18446744073709551614}", "u");
    print(!re1.test(""));

    var re2 = new RegExp("b{18446744073709551614,}?");
    print(!re2.test("a"));

    var re3 = new RegExp("b{18446744073709551614,18446744073709551614}");
    print(!re3.test("b"));
}

{
    
    shouldThrow(SyntaxError, () => {
        eval(`new RegExp("b{18446744073709551615}", "u")`);
    }, "Invalid regular expression: number too large in {} quantifier");

    shouldThrow(SyntaxError, () => {
        eval(`new RegExp("b{18446744073709551615,}?")`);
    }, "Invalid regular expression: number too large in {} quantifier");

    shouldThrow(SyntaxError, () => {
        eval(`new RegExp("b{18446744073709551615,18446744073709551615}")`);
    }, "Invalid regular expression: number too large in {} quantifier");
}

{
    
    shouldThrow(SyntaxError, () => {
        eval(`new RegExp("b{18446744073709551616}", "u")`);
    }, "Invalid regular expression: number too large in {} quantifier");

    shouldThrow(SyntaxError, () => {
        eval(`new RegExp("b{18446744073709551616,}?")`);
    }, "Invalid regular expression: number too large in {} quantifier");

    shouldThrow(SyntaxError, () => {
        eval(`new RegExp("b{18446744073709551616,18446744073709551616}")`);
    }, "Invalid regular expression: number too large in {} quantifier");
}
