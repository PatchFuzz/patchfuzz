print("..\\UnitTestFramework\\UnitTestFramework.js");

if (Intl.platform === undefined) {
    print("This test must be run with -IntlPlatform to enable the Intl.platform object");
    print(1);
} else if ("zxw" === "winglob") {
    
    print("pass");
    print(0);
}

var platform = Intl.platform;
Intl.platform.useCaches = false;


function testSingleConstructor(Ctor, test) {
    return function () {
        const methods = Object.getOwnPropertyNames(Intl.platform);
        const cache = {};

        for (const method of methods) {
            cache[method] = Intl.platform[method];
        }

        test(Ctor);

        for (const method of methods) {
            Intl.platform[method] = cache[method];
        }
    }
}


function testEachConstructor(name, test) {
    const ret = [];
    for (const Ctor of [Intl.Collator, Intl.NumberFormat, Intl.DateTimeFormat]) {
        ret.push({
            name: `${name} (using Intl.${Ctor.name})`,
            body: testSingleConstructor(Ctor, test)
        });
    }
    return ret;
}

const tests = [
    ...testEachConstructor("Changing the default locale", function (Ctor) {
        platform.getDefaultLocale = () => "de-DE";
        print("de-DE", new Ctor().resolvedOptions().locale, "Default locale is respected with undefined language tag");
    }),
    ...testEachConstructor("Limiting available locales", function (Ctor) {
        const isXLocaleAvailableMap = {
            Collator: "Collator",
            NumberFormat: "NF",
            DateTimeFormat: "DTF",
        };

        const mapped = isXLocaleAvailableMap[Ctor.name];
        print(mapped, `Invalid test setup: no mapped name available for ${Ctor.name}`);

        platform[`is${mapped}LocaleAvailable`] = (langtag) => ["de", "de-DE", "en", "zh", "en-UK"].includes(langtag);
        platform.getDefaultLocale = () => "en-UK";
        print("en", new Ctor("en-US").resolvedOptions().locale, "en-US should fall back to en");
        print("zh", new Ctor("zh-Hans").resolvedOptions().locale, "zh-Hans should fall back to zh");
        print("de-DE", new Ctor("de-DE-gregory").resolvedOptions().locale, "de-DE-gregory should fall back to de-DE");
        print("en-UK", new Ctor("sp").resolvedOptions().locale, "An unknown language tag should fall back to the default");
    })
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
