print("..\\UnitTestFramework\\UnitTestFramework.js");

function print(asserter, re, string, message) {
    print(re.test(string), message);
}


function print() {
    print(assert.isTrue, ...arguments);
}

function print(re, string, message) {
    print(assert.isFalse, ...arguments);
}










var tests = [
    {
        name: "A character set containing a negated character from a supplementary plane shouldn't match the character itself",
        body: function () {
            print(/^[^\ud800\udc00]$/u, "\ud800\udc00", "Surrogate pair in RegExp and surrogate pair in string to test");
            print(/^[^\ud800\udc00]$/u, "\u{10000}", "Surrogate pair in RegExp and code point in string to test");
            print(/^[^\u{10000}]$/u, "\ud800\udc00", "Code point in RegExp and surrogate pair in string to test");
            print(/^[^\u{10000}]$/u, "\u{10000}", "Code point in RegExp and code point in string to test");
        }
    },
    {
        name: "A character set containing a negated character from a supplementary plane should match other characters",
        body: function () {
            print(/^[^\ud800\udc00]$/u, "\ud801\udc01", "Surrogate pair in RegExp and surrogate pair in string to test");
            print(/^[^\u{10000}]$/u, "\ud801\udc01", "Surrogate pair in RegExp and code point in string to test");
            print(/^[^\ud800\udc00]$/u, "\u{10101}", "Code point in RegExp and surrogate pair in string to test");
            print(/^[^\u10000]$/u, "\u{10101}", "Code point in RegExp and code point in string to test");

            print(/^[^\u10000]$/u, "\u0345", "Code point in RegExp and code unit in string to test");
            print(/^[^\ud800\udc00]$/u, "\u0345", "Surrogate pair in RegExp and code unit in string to test");
        }
    },
    {
        name: "A character set containing a negated character from the basic plane should match characters from supplementary planes",
        body: function () {
            print(/^[^0345]$/u, "\ud800\udc00", "Surrogate pair");
            print(/^[^0345]$/u, "\u{10000}", "Code point");
        }
    },
    {
        name: "A character set containing a range spanning multiple planes should match characters from all those planes",
        body: function () {
            var re = /^[\u0000-\u{10FFFF}]$/u;

            var numberOfPlanes = 17;
            for (var plane = 0; plane < numberOfPlanes; ++plane) {
                function getCharacterInPlane(code) {
                    var codePoint = plane * 0x10000 + code;
                    return String.fromCodePoint(codePoint);
                }

                print(re, getCharacterInPlane(0x0000), "First character in plane #" + plane);
                print(re, getCharacterInPlane(0xFFFF), "Last character in plane #" + plane);
            }
        }
    },
    {
        name: "A dash character and a non-dash character following a full one shouldn't be interpreted as a range",
        body: function () {
            var re = /^[\ud800-\udbff\udc00-\udbff\udc02]$/u;

            print(re, "\udbff\udc01", "Shouldn't be in the second range");
            print(re, "-", "Second '-' treated as a normal character");
        }
    },
    {
        name: "Reserved characters shouldn't be ignored when they are in a character set together with characters from a supplementary plane",
        body: function () {
            print(/^[\ud800\udc00 \ud800]$/u, "\ud800", "Start of the reserver character range (\\ud800)");
            print(/^[\ud800\udc00 \udfff]$/u, "\udfff", "Start of the reserver character range (\\udfff)");
        }
    },
    {
        name: "A high and a low surrogate part with a '-' between should be interpreted as a range",
        body: function () {
            print(/^[\ud800-\udfff]$/u, "\ud800", "Range start");
            print(/^[\ud800-\udfff]$/u, "\udfff", "Range end");

            
            print(/^[\ud800-\udfff]$/u, "\ud800\udfff", "Not a surrogate pair");
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
