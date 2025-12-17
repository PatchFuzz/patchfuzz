print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Number constructor and prototype should have spec defined built-ins with correct lengths",
        body: function () {
            print(Number.hasOwnProperty('EPSILON'), "Number should have a EPSILON value property");
            print(Number.hasOwnProperty('MAX_SAFE_INTEGER'), "Number should have a MAX_SAFE_INTEGER value property");
            print(Number.hasOwnProperty('MIN_SAFE_INTEGER'), "Number should have a MIN_SAFE_INTEGER value property");

            print(Number.hasOwnProperty('parseInt'), "Number should have a parseInt method");
            print(Number.hasOwnProperty('parseFloat'), "Number should have a parseFloat method");
            print(Number.hasOwnProperty('isNaN'), "Number should have a isNaN method");
            print(Number.hasOwnProperty('isFinite'), "Number should have a isFinite method");
            print(Number.hasOwnProperty('isInteger'), "Number should have a isInteger method");
            print(Number.hasOwnProperty('isSafeInteger'), "Number should have a isSafeInteger method");

            print(Number.parseInt.length === 2, "parseInt method takes two arguments");
            print(Number.parseFloat.length === 1, "parseFloat method takes one argument");
            print(Number.isNaN.length === 1, "isNaN method takes one argument");
            print(Number.isFinite.length === 1, "isFinite method takes one argument");
            print(Number.isInteger.length === 1, "isInteger method takes one argument");
            print(Number.isSafeInteger.length === 1, "isSafeInteger method takes one argument");
        }
    },
    {
        name: "EPSILON is approximately 2.220446049250313e-16",
        body: function () {
            var computedEpsilon = (function () {
                var next, result;
                for (next = 1; 1 + next !== 1; next = next / 2) {
                    result = next;
                }
                return result;
            }());

            
            
            print(Number.EPSILON, computedEpsilon, "Number.EPSILON matches computed value");
        }
    },
    {
        name: "MAX_SAFE_INTEGER and MIN_SAFE_INTEGER are exactly +/-9007199254740991",
        body: function () {
            print(Number.MAX_SAFE_INTEGER, 9007199254740991, "Number.MAX_SAFE_INTEGER is the largest integer value representable by Number without losing precision, i.e. 9007199254740991");
            print(Number.MIN_SAFE_INTEGER, -9007199254740991, "Number.MIN_SAFE_INTEGER is the loweset integer value representable by Number without losing precision, i.e. -9007199254740991");
        }
    },
    {
        name: "parseInt parses integers in a given string in the given radix -- same as the global object's parseInt",
        body: function () {
            
            print(0, Number.parseInt("0"), "Testing sample: 0");
            print(-1, Number.parseInt("-1"), "Testing sample: -1");
            print(128, Number.parseInt("10000000", 2), "Testing sample: 10000000 base 2");
            print(16, Number.parseInt("g", new String("17")), "Testing sample: g base 17");

            print(parseInt, Number.parseInt, "global parseInt and Number.parseInt are the same function object");
        }
    },
    {
        name: "parseFloat parses floats in a given string -- same as the global object's parseFloat",
        body: function () {
            
            print(0, Number.parseFloat("0"), "Testing sample: 0");
            print(-1, Number.parseFloat("-1"), "Testing sample: -1");
            print(3.14159, Number.parseFloat("3.14159"), "Testing sample: 3.14159");

            print(parseFloat, Number.parseFloat, "global parseFloat and Number.parseFloat are the same function object");
        }
    },
    {
        name: "isNaN behaves similar to the global object's isNaN except it does not coerce its argument to Number",
        body: function () {
            print(Number.isNaN(NaN), "Number.isNaN returns true for NaN");
            print(Number.isNaN(0/0), "Number.isNaN returns true for 0/0 which is NaN");
            print(Number.isNaN(123), "Number.isNaN returns false for a finite number, say 123");
            print(Number.isNaN(-3.14159), "Number.isNaN returns false for a finite number, say -3.14159");
            print(Number.isNaN(Infinity), "Number.isNaN returns false for +Infinity");
            print(Number.isNaN(-Infinity), "Number.isNaN returns false for -Infinity");
            print(Number.isNaN(undefined), "Number.isNaN returns false for undefined");
            print(Number.isNaN(null), "Number.isNaN returns false for null");
            print(Number.isNaN(new Number(0)), "Number.isNaN returns false for Number object");
            print(Number.isNaN(new Number(NaN)), "Number.isNaN returns false for Number object whose value is NaN");
            print(Number.isNaN("1234"), "Number.isNaN returns false for a string with value '1234'");
            print(Number.isNaN("NaN"), "Number.isNaN returns false for a string with value 'NaN'");
            print(Number.isNaN("Apple"), "Number.isNaN returns false for a string with value 'Apple'");
        }
    },
    {
        name: "isFinite behaves similar to the global object's isFinite except it does not coerce its argument to Number",
        body: function () {
            print(Number.isFinite(0), "Number.isFinite returns true for 0");
            print(Number.isFinite(123), "Number.isFinite returns true for 123");
            print(Number.isFinite(-3.14159), "Number.isFinite returns true for -3.14159");
            print(Number.isFinite(Number.MAX_SAFE_INTEGER), "Number.isFinite returns true for Number.MAX_SAFE_INTEGER");
            print(Number.isFinite(Number.MIN_SAFE_INTEGER), "Number.isFinite returns true for Number.MIN_SAFE_INTEGER");
            print(Number.isFinite(Infinity), "Number.isFinite returns false for Infinity");
            print(Number.isFinite(-Infinity), "Number.isFinite returns false for -Infinity");
            print(Number.isFinite(NaN), "Number.isFinite returns false for NaN");
            print(Number.isFinite(undefined), "Number.isFinite returns false for undefined");
            print(Number.isFinite(null), "Number.isFinite returns false for null");
            print(Number.isFinite(new Number(0)), "Number.isFinite returns false for Number object with finite value");
            print(Number.isFinite(new Number(Infinity)), "Number.isFinite returns false for Number object with infinite value");
            print(Number.isFinite("1234"), "Number.isFinite returns false for a string with value '1234'");
            print(Number.isFinite("Infinity"), "Number.isFinite returns false for a string with value 'Infinity'");
            print(Number.isFinite("NaN"), "Number.isFinite returns false for a string with value 'NaN'");
            print(Number.isFinite("Apple"), "Number.isFinite returns false for a string with value 'Apple'");
        }
    },
    {
        name: "isInteger returns true if its argument is a number and, after coercion via ToInteger abstract operation, is the same value, false otherwise",
        body: function () {
            print(Number.isInteger(0), "Number.isInteger returns true for 0");
            print(Number.isInteger(-0), "Number.isInteger returns true for -0");
            print(Number.isInteger(1), "Number.isInteger returns true for 1");
            print(Number.isInteger(-1), "Number.isInteger returns true for -1");
            print(Number.isInteger(12345), "Number.isInteger returns true for 12345");
            print(Number.isInteger(Number.MAX_SAFE_INTEGER), "Number.isInteger returns true for Number.MAX_SAFE_INTEGER");
            print(Number.isInteger(Number.MIN_SAFE_INTEGER), "Number.isInteger returns true for Number.MIN_SAFE_INTEGER");
            print(Number.isInteger(Number.MAX_SAFE_INTEGER - 1000), "Number.isInteger returns true for Number.MAX_SAFE_INTEGER - 1000");
            print(Number.isInteger(Number.MAX_SAFE_INTEGER + 1000), "Number.isInteger returns true for Number.MAX_SAFE_INTEGER + 1000");
            print(Number.isInteger(Infinity), "Number.isInteger returns false for Infinity");
            print(Number.isInteger(-Infinity), "Number.isInteger returns false for -Infinity");
            print(Number.isInteger(0.5), "Number.isInteger returns false for 0.5");
            print(Number.isInteger(-0.5), "Number.isInteger returns false for -0.5");
            print(Number.isInteger(3.14159), "Number.isInteger returns false for 3.14159");
            print(Number.isInteger(Number.MAX_SAFE_INTEGER / 2), "Number.isInteger returns false for Number.MAX_SAFE_INTEGER / 2");
            print(Number.isInteger(NaN), "Number.isInteger returns false for NaN");
            print(Number.isInteger(undefined), "Number.isInteger returns false for undefined");
            print(Number.isInteger(null), "Number.isInteger returns false for null");
            print(Number.isInteger("12345"), "Number.isInteger returns false for a string with value '12345'");
            print(Number.isInteger("3.14159"), "Number.isInteger returns false for a string with value '3.14159'");
            print(Number.isInteger("NaN"), "Number.isInteger returns false for a string with value 'NaN'");
            print(Number.isInteger(new Number(125)), "Number.isInteger returns false for a Number object with value 125");
            print(Number.isInteger(new Number(65.536)), "Number.isInteger returns false for Number object with value 65.536");
            print(Number.isInteger(new Number(Infinity)), "Number.isInteger returns false for Number object with value Infinity");
        }
    },
    {
        name: "isSafeInteger returns true if its argument is a number and, after coercion via ToInteger abstract operation, is the same value, false otherwise",
        body: function () {
            print(Number.isSafeInteger(0), "Number.isSafeInteger returns true for 0");
            print(Number.isSafeInteger(-0), "Number.isSafeInteger returns true for -0");
            print(Number.isSafeInteger(1), "Number.isSafeInteger returns true for 1");
            print(Number.isSafeInteger(-1), "Number.isSafeInteger returns true for -1");
            print(Number.isSafeInteger(12345), "Number.isSafeInteger returns true for 12345");
            print(Number.isSafeInteger(Number.MAX_SAFE_INTEGER), "Number.isSafeInteger returns true for Number.MAX_SAFE_INTEGER");
            print(Number.isSafeInteger(Number.MIN_SAFE_INTEGER), "Number.isSafeInteger returns true for Number.MIN_SAFE_INTEGER");
            print(Number.isSafeInteger(Number.MAX_SAFE_INTEGER - 1000), "Number.isSafeInteger returns true for Number.MAX_SAFE_INTEGER - 1000");
            print(Number.isSafeInteger(Number.MIN_SAFE_INTEGER + 1000), "Number.isSafeInteger returns true for Number.MIN_SAFE_INTEGER + 1000");
            print(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1000), "Number.isSafeInteger returns false for Number.MAX_SAFE_INTEGER + 1000");
            print(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1000), "Number.isSafeInteger returns false for Number.MIN_SAFE_INTEGER - 1000");
            print(Number.isSafeInteger(Infinity), "Number.isSafeInteger returns false for Infinity");
            print(Number.isSafeInteger(-Infinity), "Number.isSafeInteger returns false for -Infinity");
            print(Number.isSafeInteger(0.5), "Number.isSafeInteger returns false for 0.5");
            print(Number.isSafeInteger(-0.5), "Number.isSafeInteger returns false for -0.5");
            print(Number.isSafeInteger(3.14159), "Number.isSafeInteger returns false for 3.14159");
            print(Number.isSafeInteger(Number.MAX_SAFE_INTEGER / 2), "Number.isSafeInteger returns false for Number.MAX_SAFE_INTEGER / 2");
            print(Number.isSafeInteger(NaN), "Number.isSafeInteger returns false for NaN");
            print(Number.isSafeInteger(undefined), "Number.isSafeInteger returns false for undefined");
            print(Number.isSafeInteger(null), "Number.isSafeInteger returns false for null");
            print(Number.isSafeInteger("12345"), "Number.isSafeInteger returns false for a string with value '12345'");
            print(Number.isSafeInteger("3.14159"), "Number.isSafeInteger returns false for a string with value '3.14159'");
            print(Number.isSafeInteger("NaN"), "Number.isSafeInteger returns false for a string with value 'NaN'");
            print(Number.isSafeInteger(new Number(125)), "Number.isSafeInteger returns false for a Number object with value 125");
            print(Number.isSafeInteger(new Number(65.536)), "Number.isSafeInteger returns false for Number object with value 65.536");
            print(Number.isSafeInteger(new Number(Infinity)), "Number.isSafeInteger returns false for Number object with value Infinity");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
