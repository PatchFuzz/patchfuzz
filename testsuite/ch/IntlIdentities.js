




WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

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
                assert.areEqual(staticMethods[i].name, shortNames[i]);
            }
        }
    },
    {
        name: "Invoking built-in static methods with `new` fails (check name in error message)",
        body: function () {
            for (let i in staticMethods) {
                const expectedMessage = WScript.Platform.INTL_LIBRARY === "icu"
                    ? "Function is not a constructor"
                    : `Function '${longNames[i]}' is not a constructor`;
                assert.throws(() => new staticMethods[i](), TypeError, "", expectedMessage);
            }
        }
    },
    {
        name: "toString of built-in static methods",
        body: function () {
            for (let i in staticMethods) {
                const expectedMessage = WScript.Platform.INTL_LIBRARY === "icu"
                    ? `function ${shortNames[i]}() { [native code] }`
                    : expectedToString;
                assert.areEqual(expectedMessage, "" + staticMethods[i]);
                assert.areEqual(expectedMessage, staticMethods[i].toString());
            }
        }
    }
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
