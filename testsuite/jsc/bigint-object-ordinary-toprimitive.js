function shouldBe(actual, expected) {
    if (!Object.is(actual, expected))
        throw new Error(`Bad value: ${actual}!`);
}

function shouldThrow(func, expectedError) {
    let errorThrown = false;
    try {
        func();
    } catch (error) {
        errorThrown = true;
        if (error.toString() !== expectedError)
            throw new Error(`Bad error: ${error}!`);
    }
    if (!errorThrown)
        throw new Error("Didn't throw!");
}

const BigIntToString = BigInt.prototype.toString;
let toStringGets = 0;
let toStringCalls = 0;
let toStringFunction = function() { ++toStringCalls; return `${BigIntToString.call(this)}foo`; };
Object.defineProperty(BigInt.prototype, "toString", {
    get: () => { ++toStringGets; return toStringFunction; },
});

shouldBe("" + Object(1n), "1"); 
shouldThrow(() => { +Object(1n); }, "TypeError: Conversion from 'BigInt' to 'number' is not allowed."); 
shouldBe(`${Object(1n)}`, "1foo"); 

shouldBe(toStringGets, 1);
shouldBe(toStringCalls, 1);

const BigIntValueOf = BigInt.prototype.valueOf;
let valueOfGets = 0;
let valueOfCalls = 0;
let valueOfFunction = function() { ++valueOfCalls; return BigIntValueOf.call(this) * 2n; };
Object.defineProperty(BigInt.prototype, "valueOf", {
    get: () => { ++valueOfGets; return valueOfFunction; },
});

shouldBe(Object(1n) == 2n, true); 
shouldBe(Object(1n) + 1n, 3n); 
shouldBe({ "1foo": 1, "2": 2 }[Object(1n)], 1); 

shouldBe(toStringGets, 2);
shouldBe(toStringCalls, 2);
shouldBe(valueOfGets, 2);
shouldBe(valueOfCalls, 2);

toStringFunction = undefined;

shouldThrow(() => { 1 + Object(1n); }, "TypeError: Invalid mix of BigInt and other type in addition."); 
shouldBe(Object(1n) * 1n, 2n); 
shouldBe("".concat(Object(1n)), "2"); 

shouldBe(toStringGets, 3);
shouldBe(toStringCalls, 2);
shouldBe(valueOfGets, 5);
shouldBe(valueOfCalls, 5);

valueOfFunction = null;

shouldThrow(() => { new Date(Object(1n)); }, "TypeError: No default value"); 
shouldThrow(() => { Number(Object(1n)); }, "TypeError: No default value"); 
shouldThrow(() => { String(Object(1n)); }, "TypeError: No default value"); 

shouldBe(toStringGets, 6);
shouldBe(toStringCalls, 2);
shouldBe(valueOfGets, 8);
shouldBe(valueOfCalls, 5);
