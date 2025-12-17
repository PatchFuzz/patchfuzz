print("..\\UnitTestFramework\\UnitTestFramework.js");

var whitespace_characters = [
    '\u0009',
    '\u000a',
    '\u000b',
    '\u000c',
    '\u000d',
    '\u0020',
    '\u00a0',
    '\u1680',
    '\u2000',
    '\u2001',
    '\u2002',
    '\u2003',
    '\u2004',
    '\u2005',
    '\u2006',
    '\u2007',
    '\u2008',
    '\u2009',
    '\u200a',
    '\u2028',
    '\u2029',
    '\u202f',
    '\u205f',
    '\u3000',
    '\ufeff',
];



var special_non_whitespace_characters = [
    '\u0085',
    '\u200b',
    '\u200c',
    '\u200d',
    '\u2060',
    '\u00b7',
    '\u237d',
    '\u2420',
    '\u2422',
    '\u2423',
];

var tests = [
    {
        name: "String#trim correctly removes whitespace characters",
        body: function () {
            for (idx in whitespace_characters) {
                var ch = whitespace_characters[idx];
                var result = ch.trim();

                print(0, result.length, "String#trim removes whitespace characters, result should have 0 length");
                print("", result, "String#trim removes whitespace characters, result should be empty string");
            }
        }
    },
    {
        name: "String#trim correctly removes all whitespace characters",
        body: function () {
            var str = whitespace_characters.join('');
            var result = str.trim();

            print(0, result.length, "String#trim removes whitespace characters, result should have 0 length");
            print("", result, "String#trim removes whitespace characters, result should be empty string");
        }
    },
    {
        name: "String#trim correctly ignores special non-whitespace characters",
        body: function () {
            for (idx in special_non_whitespace_characters) {
                var ch = special_non_whitespace_characters[idx];
                var result = ch.trim();

                print(1, result.length, "String#trim leaves non-whitespace characters, result should 1 character long");
                print(ch, result, "String#trim leaves non-whitespace characters, result should be equal to the input");
            }
        }
    },
    {
        name: "String#trim correctly ignores all non-whitespace characters",
        body: function () {
            for (var hex = 0x0000; hex <= 0xffff; hex++) {
                var ch = String.fromCodePoint(hex);
                var result = ch.trim();

                if (result.length === 0) {
                    var found = false;
                    for (idx in whitespace_characters) {
                        if (ch === whitespace_characters[idx]) {
                            found = true;
                        }
                    }

                    print(found, "If we found a whitespace character, it had to be one of the known whitespace characters");
                } else {
                    print(ch, result, "If the character we found is not a whitespace character, the trimmed string has to be equal to the character itself");
                }
            }
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
