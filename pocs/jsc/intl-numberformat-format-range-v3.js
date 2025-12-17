function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual + " " + expected);
}

function shouldThrow(func, errorType) {
    let error;
    try {
        func();
    } catch (e) {
        error = e;
    }

    if (!(error instanceof errorType))
        throw new Error(`Expected ${errorType.name} but got ${String(error)}!`);
}

function shouldNotThrow(func) {
    func();
}

const validRanges = [[-12345, -5678], [-12345, 56789], [12345, 56789]];

const nf = new Intl.NumberFormat("en", {signDisplay: "exceptZero"});
if (nf.formatRange || nf.formatRangeToParts) {
    let methods = [];
    if (nf.formatRange)
        methods.push("formatRange");
    if (nf.formatRangeToParts)
        methods.push("formatRangeToParts");
    methods.forEach(function(method) {
        shouldBe("function", typeof nf[method]);

        
        
        let f = nf[method];
        shouldThrow(() => { f(1, 23) }, TypeError);
        shouldBe(f.length, 2);

        
        shouldNotThrow(() => nf[method](1, 23));

        
        shouldThrow(() => { nf[method](undefined, 23) }, TypeError);
        
        shouldThrow(() => { nf[method](1, undefined) }, TypeError);

        
        
        shouldNotThrow(() => nf[method](null, 23));
        shouldNotThrow(() => nf[method](false, 23));
        shouldNotThrow(() => nf[method](true, 23));
        shouldNotThrow(() => nf[method]("12", 23));
        shouldNotThrow(() => nf[method]("-123456789012345678901234567890", 23));
        shouldThrow(() => { nf[method](Symbol(12), 23) }, TypeError);
        shouldNotThrow(() => nf[method](12, 23));
        shouldNotThrow(() => nf[method](12n, 23));
        shouldThrow(() => { nf[method]({}, -23) }, RangeError);
        shouldNotThrow(() => { nf[method]([], 23) });

        
        
        shouldNotThrow(() => nf[method](-12, null));
        shouldNotThrow(() => nf[method](-12, false));
        shouldNotThrow(() => nf[method](-12, true));
        shouldNotThrow(() => nf[method](12, "23"));
        shouldNotThrow(() => nf[method](12, "23456789012345678901234567890"));
        shouldThrow(() => { nf[method](12, Symbol(23)) }, TypeError);
        shouldNotThrow(() => nf[method](12, 23));
        shouldNotThrow(() => nf[method](12, 23n));
        shouldThrow(() => { nf[method](-12, {}) }, RangeError);
        shouldNotThrow(() => { nf[method](-12, []) });

        
        shouldThrow(() => { nf[method](NaN, 23) }, RangeError);
        shouldThrow(() => { nf[method]("NaN", 23) }, RangeError);
        
        shouldThrow(() => { nf[method](12, NaN) }, RangeError);
        shouldThrow(() => { nf[method](12, "NaN") }, RangeError);
        shouldThrow(() => { nf[method](12, "xyz") }, RangeError);

        shouldNotThrow(() => { nf[method](-12/0, 12/0) });
        shouldNotThrow(() => { nf[method](12/0, -12/0) });

        shouldNotThrow(() => nf[method](23, 12));
        shouldNotThrow(() => nf[method](12, 23));
        
        shouldNotThrow(() => { nf[method](23, 12n) });
        shouldNotThrow(() => nf[method](12, 23n));
        
        shouldNotThrow(() => { nf[method](23n, 12) });
        shouldNotThrow(() => nf[method](12n, 23));
        
        shouldNotThrow(() => { nf[method](23n, 12n) });
        shouldNotThrow(() => nf[method](12n, 23n));

        validRanges.forEach(
            function([x, y]) {
                const X = BigInt(x);
                const Y = BigInt(y);
                const formatted_x_y = nf[method](x, y);
                const formatted_X_y = nf[method](X, y);
                const formatted_x_Y = nf[method](x, Y);
                const formatted_X_Y = nf[method](X, Y);
                shouldBe(JSON.stringify(formatted_x_y), JSON.stringify(formatted_X_y));
                shouldBe(JSON.stringify(formatted_x_y), JSON.stringify(formatted_x_Y));
                shouldBe(JSON.stringify(formatted_x_y), JSON.stringify(formatted_X_Y));
            });
    });
}


if (nf.formatRangeToParts) {
    validRanges.forEach(
        function([x, y]) {
            const expectedPlus = (x > 0) ? ((y > 0) ? 2 : 1) : ((y > 0) ? 1 : 0);
            const expectedMinus = (x < 0) ? ((y < 0) ? 2 : 1) : ((y < 0) ? 1 : 0);
            let actualPlus = 0;
            let actualMinus = 0;
            const parts = nf.formatRangeToParts(x, y);
            parts.forEach(function(part) {
                if (part.type == "plusSign") actualPlus++;
                if (part.type == "minusSign") actualMinus++;
            });
            const method = "formatRangeToParts(" + x + ", " + y + "): ";
            shouldBe(expectedPlus, actualPlus,
                method + "Number of type: 'plusSign' in parts is incorrect");
            shouldBe(expectedMinus, actualMinus,
                method + "Number of type: 'minusSign' in parts is incorrect");
        });
}


const nf2 = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
});


if (nf2.formatRange)
    shouldBe("€3 – €5", nf2.formatRange(3, 5));

const nf3 = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
});
if (nf3.formatRangeToParts) {
    const actual3 = nf3.formatRangeToParts(3, 5);
    
    shouldBe(5, actual3.length);
    shouldBe("currency", actual3[0].type);
    shouldBe("€", actual3[0].value);
    shouldBe("startRange", actual3[0].source);
    shouldBe("integer", actual3[1].type);
    shouldBe("3", actual3[1].value);
    shouldBe("startRange", actual3[1].source);
    shouldBe("literal", actual3[2].type);
    shouldBe(" – ", actual3[2].value);
    shouldBe("shared", actual3[2].source);
    shouldBe("currency", actual3[3].type);
    shouldBe("€", actual3[3].value);
    shouldBe("endRange", actual3[3].source);
    shouldBe("integer", actual3[4].type);
    shouldBe("5", actual3[4].value);
    shouldBe("endRange", actual3[4].source);
}

const nf4 = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
});
if (nf4.formatRange)
    shouldBe("~€3", nf4.formatRange(2.9, 3.1));

const nf5 = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    signDisplay: "always",
});
if (nf5.formatRange)
    shouldBe("~+€3.00", nf5.formatRange(2.999, 3.001));

const nf6 = new Intl.NumberFormat("en");
if (nf6.formatRange) {
    shouldBe("3–∞", nf6.formatRange(3, 1/0));
    shouldThrow(() => { nf6.formatRange(3, 0/0); }, RangeError);
}
