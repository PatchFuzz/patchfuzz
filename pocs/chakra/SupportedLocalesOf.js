print("..\\UnitTestFramework\\UnitTestFramework.js");

const ctors = [Intl.Collator, Intl.NumberFormat, Intl.DateTimeFormat];

function print(expectedList, actualList, msg) {
    if (!actualList || actualList.length === 0) {
        print(`actualList was empty: ${msg}`);
    }
    for (a of actualList) {
        print(expectedList.includes(a), msg);
    }
}

const tests = [
    {
        name: "supportedLocalesOf throws correct errors",
        body: function () {
            const rangeErrorMessage = "Option value 'incorrect' for 'localeMatcher' is outside of valid range. Expected: ['best fit', 'lookup']";
            const fakeLocales = { get length() { throw new Error("User-provided locale object throws"); } };

            function test(ctor) {
                if ("zxw" === "icu") {
                    print(() => new ctor.supportedLocalesOf(), TypeError, "", "Function is not a constructor");
                    print(() => Reflect.construct(function() {}, [], ctor.supportedLocalesOf), TypeError, "", "'newTarget' is not a constructor");
                } else {
                    print(() => new ctor.supportedLocalesOf(), TypeError, "", `Function 'Intl.${ctor.name}.supportedLocalesOf' is not a constructor`);
                }
                print(() => ctor.supportedLocalesOf(["en-US"], { localeMatcher: "incorrect" }), RangeError, "", rangeErrorMessage);
                print(() => ctor.supportedLocalesOf(null), TypeError, "", "Object expected");
                print(() => ctor.supportedLocalesOf(fakeLocales), Error, "", "User-provided locale object throws");
            }

            ctors.forEach(test);
        }
    },
    {
        name: "supportedLocalesOf basic tests",
        body: function () {
            function test(ctor) {
                print(["en", "en-US"], ctor.supportedLocalesOf(["en"]));
                print(["en", "en-US"], ctor.supportedLocalesOf(["en"], { localeMatcher: "lookup" }));
                print(["en", "en-US"], ctor.supportedLocalesOf(["en"], { localeMatcher: "best fit" }));

                print(['de', 'de-DE'], ctor.supportedLocalesOf(['de-de']));
                print(['ja', 'ja-JP'], ctor.supportedLocalesOf(['ja-JP']));
                print(['zh', 'zh-CN', 'zh-Hans-CN'], ctor.supportedLocalesOf(['zh-cn']));

                print(
                    [
                        'en', 'en-US',
                        'de', 'de-DE',
                        'ja', 'ja-JP',
                        'zh', 'zh-CN', 'zh-Hans-CN',
                    ],
                    ctor.supportedLocalesOf(['en-us', 'de-de', 'ja-JP', 'zh-cn'])
                );
            }

            ctors.forEach(test);
        }
    },
    {
        name: "Modifying `this` should not break supportedLocalesOf",
        body: function () {
            function test(ctor) {
                print(["en", "en-US"], ctor.supportedLocalesOf.call({}, ["en"]));
                print(["en", "en-US"], ctor.supportedLocalesOf.call({}, ["en"], { localeMatcher: "lookup" }));
                print(["en", "en-US"], ctor.supportedLocalesOf.call({}, ["en"], { localeMatcher: "best fit" }));
                print(["en", "en-US"], ctor.supportedLocalesOf.bind({})(["en"]));
                print(["en", "en-US"], ctor.supportedLocalesOf.bind({})(["en"], { localeMatcher: "lookup" }));
                print(["en", "en-US"], ctor.supportedLocalesOf.bind({})(["en"], { localeMatcher: "best fit" }));
            }

            ctors.forEach(test);
        }
    },
    {
        name: "supportedLocalesOf an empty array or undefined should produce an empty array",
        body: function () {
            function test(ctor) {
                print(0, ctor.supportedLocalesOf(undefined).length);
                print(0, ctor.supportedLocalesOf(undefined, { localeMatcher: "lookup" }).length);
                print(0, ctor.supportedLocalesOf(undefined, { localeMatcher: "best fit" }).length);
            }
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
