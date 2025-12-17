print("..\\UnitTestFramework\\UnitTestFramework.js");

let forbidden = [
    '\\p',
    '\\P',
    '\\a',
    '\\A',
    '\\e',
    '\\E',
    '\\y',
    '\\Y',
    '\\z',
    '\\Z',
];

let identity = [
    "^",
    "$",
    "\\",
    ".",
    "*",
    "+",
    "?",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "|",
    "/",
];

let pseudoIdentity = [
    ["f", "\f"],
    ["n", "\n"],
    ["r", "\r"],
    ["t", "\t"],
    ["v", "\v"],
]

var tests = [
    {
        name: "Unicode-mode RegExp Forbidden Escapes (RegExp constructor)",
        body: function () {
            for (re of forbidden) {
                print(function () { new RegExp(re, 'u') }, SyntaxError, 'Invalid regular expression: invalid escape in unicode pattern');
                print(function () { new RegExp(re) });
            }
        }
    },
    {
        name: "Unicode-mode RegExp Forbidden Escapes (literal)",
        body: function () {
            for (re of forbidden) {
                print(function () { eval(`/${re}/u`); }, SyntaxError, 'Invalid regular expression: invalid escape in unicode pattern');
                print(function () { eval(`/${re}/`); }, SyntaxError, 'Invalid regular expression: invalid escape in unicode pattern');
            }
        }
    },
    {
        name: "Allow IdentityEscapes (RegExp constructor)",
        body: function () {
            for (c of identity) {
                print(function () { new RegExp(`\\${c}`, 'u') });
                print(function () { new RegExp(`\\${c}`) });
            }
        }
    },
    {
        name: "Allow IdentityEscapes (literal)",
        body: function () {
            for (c of identity) {
                print(function () { eval(`/\\${c}/u`); });
                print(function () { eval(`/\\${c}/`); });
            }
        }
    },
    {
        name: "Allow Pseudo-Identity Escapes (RegExpconstructor)",
        body: function () {
            for (test of pseudoIdentity) {
                let c = test[0];
                let rendered = test[1];
                let re;
                print(function () { re = new RegExp(`\\${c}`, 'u') });
                print(re.test(rendered));
                print(function () { re = new RegExp(`\\${c}`) });
                print(re.test(rendered));
            }
        }
    },
    {
        name: "Allow Pseudo-Identity Escapes (literal)",
        body: function () {
            for (test of pseudoIdentity) {
                let c = test[0];
                let rendered = test[1];
                let re;
                print(function () { re = eval(`/\\${c}/u`) });
                print(re.test(rendered));
                print(function () { re = eval(`/\\${c}/`) });
                print(re.test(rendered));
            }
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
