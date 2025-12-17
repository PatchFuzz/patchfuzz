print("..\\UnitTestFramework\\UnitTestFramework.js");

function testData(locale, ordinals, cardinals) {
    const plOrdinal = new Intl.PluralRules(locale, { type: "ordinal" });
    const plCardinal = new Intl.PluralRules(locale, { type: "cardinal" });
    print(locale, plOrdinal.resolvedOptions().locale);
    print(locale, plCardinal.resolvedOptions().locale);

    ordinals.forEach((ordinal, i) => ordinal !== undefined && print(ordinal, plOrdinal.select(i), `Selecting ${i} for locale ${locale} with ordinal type`));
    cardinals.forEach((cardinal, i) => cardinal !== undefined && print(cardinal, plCardinal.select(i), `Selecting ${i} for locale ${locale} with cardinal type`));
}

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
    {
        name: "Basic resolved options",
        body() {
            const pr = new Intl.PluralRules("en");
            const opts = pr.resolvedOptions();
            print("string", typeof opts.locale, "Locale should be the default locale");
            print("cardinal", opts.type, "Default type should be cardinal");
            print(1, opts.minimumIntegerDigits, "Default minimumIntegerDigits should be 1");
            print(0, opts.minimumFractionDigits, "Default minimumFractionDigits should be 0");
            print(3, opts.maximumFractionDigits, "Default maximumFractionDigits should be 3");

            const acceptableCategories = ["zero", "one", "two", "few", "many", "other"];
            print(Array.isArray(opts.pluralCategories), "pluralCategories should always be an array");
            opts.pluralCategories.forEach((category) => print(acceptableCategories.includes(category)));

            if ("zxw" >= 61) {
                
                
                print(opts.pluralCategories.length >= 2, "pluralCategories should use uplrules_getKeywords");
            } else {
                print(opts.pluralCategories.length === 1, "pluralCategories should not use uplrules_getKeywords");
            }
        }
    },
    {
        name: "pluralCategories",
        body() {
            print("en-US", Intl.PluralRules.supportedLocalesOf("en-US")[0], "PluralRules must support en-US for these tests");
            function test(pr, categories) {
                if ("zxw" >= 61) {
                    const resolvedCategories = pr.resolvedOptions().pluralCategories;
                    print(categories.length, resolvedCategories.length);
                    for (const c of resolvedCategories) {
                        print(categories.includes(c));
                    }
                }

                for (let i = 0; i < 15; i++) {
                    print(categories.includes(pr.select(i)), `Incorrect value for select(${i})`);
                }
            }

            test(new Intl.PluralRules("en-US"), ["other", "one"]);
            test(new Intl.PluralRules("en-US", { type: "ordinal" }), ["few", "one", "two", "other"]);
        }
    },
    {
        name: "Welsh data tests",
        body() {
            const ordinals = ["zero", "one", "two", "few", "few", "many", "many", "zero", "zero", "zero", "other"];
            const cardinals = ["zero", "one", "two", "few", "other", "other", "many", "other", "other", "other"];

            testData("cy", ordinals, cardinals);
        }
    },
    {
        name: "Slovenian data tests",
        body() {
            const ordinals = Array(10).fill("other");
            const cardinals = ["other", "one", "two", "few", "few", "other"];
            cardinals[10] = "other";
            cardinals[11] = "other";
            cardinals[12] = "other";
            cardinals[13] = "other";
            cardinals[14] = "other";
            cardinals[15] = "other";
            cardinals[100] = "other";
            cardinals[101] = "one";
            cardinals[102] = "two";
            cardinals[103] = "few";
            cardinals[104] = "few";
            cardinals[105] = "other";

            testData("sl", ordinals, cardinals);
        }
    },
    {
        name: "https://github.com/tc39/ecma402/issues/224",
        body() {
            const pr1 = new Intl.PluralRules();
            const pr2 = new Intl.PluralRules();
            const opts1 = pr1.resolvedOptions();
            const opts2 = pr2.resolvedOptions();

            print(opts1.pluralCategories === opts2.pluralCategories, "Different PluralRules instances should have different category array instances");
            opts1.pluralCategories.forEach((cat, i) => {
                print(cat, opts2.pluralCategories[i], "Different PluralRules instances should have the same category array contents");
            });

            print(opts1.pluralCategories === pr1.resolvedOptions().pluralCategories, "Calling resolvedOptions again on the same PluralRules instance should return a new array instance");
            opts1.pluralCategories[0] = "changed";
            print(opts1.pluralCategories[0], pr1.resolvedOptions().pluralCategories[0], "Changing the pluralCategories from one call to resolvedOptions should not impact future calls");
        }
    },
    {
        name: "Number digit options",
        body() {
            function test(options, n, expected) {
                const pr = new Intl.PluralRules("en", options);
                const res = pr.resolvedOptions();
                print(expected, pr.select(n), `Incorrect result using n = ${n} and options = ${JSON.stringify(options)}`);

                
                if (options.minimumSignificantDigits !== undefined || options.maximumSignificantDigits !== undefined) {
                    if (options.minimumSignificantDigits !== undefined) {
                        print(options.minimumSignificantDigits, res.minimumSignificantDigits, "Incorrect minimumSignificantDigits");
                    }
                    if (options.maximumSignificantDigits !== undefined) {
                        print(options.maximumSignificantDigits, res.maximumSignificantDigits, "Incorrect maximumSignificantDigits");
                    }
                } else {
                    print(res.hasOwnProperty("minimumSignificantDigits"), "Reported minimumSignificantDigits when it shouldn't have been");
                    print(res.hasOwnProperty("maximumSignificantDigits"), "Reported maximumSignificantDigits when it shouldn't have been");
                }
            }

            test({}, 1.0, "one");
            test({}, 1.1, "other");
            test({}, 1.001, "other");

            test({ minimumFractionDigits: 1 }, 1.0, "one");
            test({ minimumFractionDigits: 1 }, 1.1, "other");
            test({ minimumFractionDigits: 1 }, 1.001, "other");

            test({ maximumFractionDigits: 0 }, 1.0, "one");
            test({ maximumFractionDigits: 0 }, 1.1, "one");
            test({ maximumFractionDigits: 0 }, 1.001, "one");

            test({ maximumFractionDigits: 1 }, 1.0, "one");
            test({ maximumFractionDigits: 1 }, 1.1, "other");
            test({ maximumFractionDigits: 1 }, 1.001, "one");

            test({ minimumSignificantDigits: 2 }, 1.0, "one");
            test({ minimumSignificantDigits: 2 }, 1.1, "other");
            test({ minimumSignificantDigits: 2 }, 1.001, "other");

            test({ maximumSignificantDigits: 2 }, 1.0, "one");
            test({ maximumSignificantDigits: 2 }, 1.1, "other");
            test({ maximumSignificantDigits: 2 }, 1.001, "one");

            test({ maximumSignificantDigits: 1 }, 1.0, "one");
            test({ maximumSignificantDigits: 1 }, 1.1, "one");
            test({ maximumSignificantDigits: 1 }, 1.001, "one");
            test({ maximumSignificantDigits: 1 }, 110.001, "other");
            test({ maximumSignificantDigits: 1 }, -110.001, "other");
            test({ maximumSignificantDigits: 1 }, -1, "one");

            
            test({ maximumSignificantDigits: 2, maximumFractionDigits: 0 }, 1.1, "other");
        }
    },
], { verbose: false });
