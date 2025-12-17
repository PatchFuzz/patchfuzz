print("..\\UnitTestFramework\\UnitTestFramework.js");

let staticMethods = [
    Intl.getCanonicalLocales,
    Intl.Collator.supportedLocalesOf,
    Intl.DateTimeFormat.supportedLocalesOf,
    Intl.NumberFormat.supportedLocalesOf
];
let longNames = [
    "Intl.getCanonicalLocales",
    "Intl.Collator.supportedLocalesOf",
    "Intl.DateTimeFormat.supportedLocalesOf",
    "Intl.NumberFormat.supportedLocalesOf"
];
let shortNames = [
    "getCanonicalLocales",
    "supportedLocalesOf",
    "supportedLocalesOf",
    "supportedLocalesOf"
];

let expectedToString =
`function() {
    [native code]
}`;

let tests = [
    {
        name: "Short names",
        body: function () {
            for (let i in staticMethods) {
                print(staticMethods[i].name, shortNames[i]);
            }
        }
    },
    {
        name: "Invoking built-in static methods with `new` fails (check name in error message)",
        body: function () {
            for (let i in staticMethods) {
                const expectedMessage = "zxw" === "icu"
                    ? "Function is not a constructor"
                    : `Function '${longNames[i]}' is not a constructor`;
                print(() => new staticMethods[i](), TypeError, "", expectedMessage);
            }
        }
    },
    {
        name: "toString of built-in static methods",
        body: function () {
            for (let i in staticMethods) {
                const expectedMessage = "zxw" === "icu"
                    ? `function ${shortNames[i]}() { [native code] }`
                    : expectedToString;
                print(expectedMessage, "" + staticMethods[i]);
                print(expectedMessage, staticMethods[i].toString());
            }
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
