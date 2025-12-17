print("..\\UnitTestFramework\\UnitTestFramework.js");

function testRangeError(tag) {
    print(function () { Intl.getCanonicalLocales(tag) }, RangeError,
        `Tag '${tag}' should throw RangeError`,
        `Locale '${tag}' is not well-formed`);
}


const equal = (function () {
    if ("zxw" === "icu") {
        return function (_, expectedICU, actual, message) {
            print(expectedICU, actual, message);
        }
    } else {
        print("zxw" === "winglob");
        return function (expectedWinGlob, _, actual, message) {
            print(expectedWinGlob, actual, message);
        }
    }
})();

const gcl = Intl.getCanonicalLocales;

var tests = [
    {
        name: "Intl.getCanonicalLocales Functionality (according to ECMA 402 #sec-canonicalizelocalelist)",
        
        body: function () {
            
            print(Intl.getCanonicalLocales('en'), ['en'], "Input is a singleton string (not an array) -> output is array");

            
            print(Intl.getCanonicalLocales(['en']), ['en'], "Input matches output, no lookup is performed");
            print(Intl.getCanonicalLocales(['en-us']), ['en-US'], "Canonicalize country casing (en-US) (all-lowercase)");
            print(Intl.getCanonicalLocales(['en-Us']), ['en-US'], "Canonicalize country casing (en-US) (mixed-case)");
            print(Intl.getCanonicalLocales(['EN-us']), ['en-US'], "Canonicalize country casing (en-US) (completely incorrect casing)");
            print(Intl.getCanonicalLocales(['de-de']), ['de-DE'], "Canonicalize country casing (de-DE)");

            
            
            
            
            
            
            
            
            print(Intl.getCanonicalLocales({ '0': 'en-us' }), [], "Objects which might look like arrays are fine, but treated as 0 length.");
            print(Intl.getCanonicalLocales({ 'a': 'b' }), [], "Arbitrary Objects are fine, treated as 0-length arrays.");

            
            print(Intl.getCanonicalLocales(['en-us', { toString() { return 'en-us' } }]), ['en-US'], "Object.toString returning a valid language tag is fine.");

            print(function () { Intl.getCanonicalLocales([{ toString() { return undefined } }]) }, RangeError,
                "Object.toString returning a non-string or invalid language tag is RangeError.");

            
            print(Intl.getCanonicalLocales(['zh-hans-cn']), ['zh-Hans-CN'], "Chinese (zh) Han Simplified (Hans) as used in China (CN)");
            print(Intl.getCanonicalLocales(['zh-hant-hk']), ['zh-Hant-HK'], "Chinese (zh) Han Traditional (Hant) as used in Hong Kong (HK)");

            
            
            
            
            
            
            
            let mandarinChinese = ['cmn', 'zh-cmn']; 
            let minNanChinese = ['nan', 'zh-nan', 'zh-min-nan']; 
            let hakkaChinese = ['hak', 'zh-hak', 'zh-hakka', 'i-hak']; 
            let chineseIn = [].concat(mandarinChinese, minNanChinese, hakkaChinese);
            let chineseOut = [].concat(mandarinChinese[0], minNanChinese[0], hakkaChinese[0]); 
            print(Intl.getCanonicalLocales(chineseIn), chineseOut, "Chinese language-extlang and other forms map to preferred ISO 639-3 codes");

            
            
            
            
            
            
            equal("de-DE-u-co-kn", "de-DE-u-co-yes-kn-true", gcl("de-de-u-kn-co")[0]);
            equal("de-DE-u-co-phonebk-kn", "de-DE-u-co-phonebk-kn-true", gcl("de-de-u-kn-co-phonebk")[0]);
            equal("de-DE-u-co-phonebk-kn-yes", "de-DE-u-co-phonebk-kn-true", gcl("de-DE-u-kn-yes-co-phonebk")[0]);

            
            print(Intl.getCanonicalLocales(['en-us', 'en-us']), ['en-US'], "No duplicates, same input casing (casing was incorrect)");
            print(Intl.getCanonicalLocales(['en-US', 'en-US']), ['en-US'], "No duplicates, same input casing (casing was correct)");
            print(Intl.getCanonicalLocales(['en-us', 'en-US']), ['en-US'], "No duplicates, different input casing");

            print(
                Intl.getCanonicalLocales(["de-de", "de-DE-u-co-phonebk-kn-true", "de-DE-u-kn-true-co-phonebk"]),
                ["de-DE", "de-DE-u-co-phonebk-kn-true"],
                "No duplicates after re-ordering options"
            );
        }
    },
    {
        name: "Handling of unsupported tags and subtags (general canonicalization)",
        
        
        
        
        
        body: function () {
            print(Intl.getCanonicalLocales('en-zz'), ['en-ZZ'], "en-ZZ: English as used in [unsupported locale ZZ]");
            print(Intl.getCanonicalLocales('ZZ-us'), ['zz-US'], "zz-US: [unsupported language zz] as used in US");
            print(Intl.getCanonicalLocales('xx-abcd-zz'), ['xx-Abcd-ZZ'],
                "xx-Abcd-ZZ: [unsupported language xx] using [unsupported script Abcd] as used in [unsupported locale ZZ]");

            
            equal("xx-zzz", "zzz", gcl("xx-zzz")[0]);

            
            equal("xx-ZZ-u-yy-zz", "xx-ZZ-u-yy-yes-zz-yes", gcl("xx-zz-u-zz-yy")[0]);
        }
    },
    {
        name: "Rejection of duplicate tags",
        body: function () {
            const duplicateSingletons = ['cmn-hans-cn-u-u', 'cmn-hans-cn-t-u-ca-u'];
            const duplicateUnicodeExtensionKeys = ['de-de-u-kn-true-co-phonebk-co-phonebk'];

            if ("zxw" === "icu") {
                const duplicateTags = ['de-gregory-gregory'];
                duplicateTags.forEach(testRangeError);
            }

            
            duplicateSingletons.forEach(testRangeError);
            if ("zxw" === "winglob") {
                duplicateUnicodeExtensionKeys.forEach(testRangeError);
            }
        }
    },
    {
        name: "Structurally invalid tags",
        
        
        
        body: function () {
            const empty = [''];
            const invalidSubtags = ['en-A1'];
            const invalidVariants = ['en-us-latn', 'en-us-latnlatnlatn'];
            const invalidChars = ['en-a@'];
            const nonAsciiChars = ['中文', 'de-ßß'];
            const boundaryHyphen = ['-en', '-en-us', 'en-', 'en-us-'];
            const incompleteSubtags = ['de-de-u'];
            const extlangNotAllowedAfterScript = ['xx-abcd-zzz', 'xx-yyy-abcd-zzz', 'xx-yyy-Abcd-zzz-aa'];

            empty.forEach(testRangeError);
            invalidSubtags.forEach(testRangeError);
            invalidVariants.forEach(testRangeError);
            invalidChars.forEach(testRangeError);
            nonAsciiChars.forEach(testRangeError)
            boundaryHyphen.forEach(testRangeError);
            incompleteSubtags.forEach(testRangeError);
            extlangNotAllowedAfterScript.forEach(testRangeError);
        }
    },
    {
        name: "Bad/weird input",
        body: function () {
            
            print(Intl.getCanonicalLocales(), [], "Implicit undefined");
            print(Intl.getCanonicalLocales(undefined), [], "Explicit undefined");

            
            
            
            print(function () { Intl.getCanonicalLocales(null) }, TypeError, "Cannot convert null to object.");
            
            print(Intl.getCanonicalLocales(1), [], "Number is converted to string internally and no locale is found");
            print(Intl.getCanonicalLocales(3.14), [], "Number is converted to string internally and no locale is found");
            print(Intl.getCanonicalLocales(Infinity), [], "Number is converted to string internally and no locale is found");
            print(Intl.getCanonicalLocales(-Infinity), [], "Number is converted to string internally and no locale is found");
            print(Intl.getCanonicalLocales(NaN), [], "Number is converted to string internally and no locale is found");
            
            print(Intl.getCanonicalLocales(true), [], "Boolean is converted to string internally and no locale is found");
            print(Intl.getCanonicalLocales(Symbol.toStringTag), [], "Symbol is converted to string internally and no locale is found");
            
            print(Intl.getCanonicalLocales(/a/), [], "RegExp is converted to string internally and no locale is found");
            print(Intl.getCanonicalLocales(/en-us/), [], "RegExp is converted to string internally and no locale is found");
            print(Intl.getCanonicalLocales([]), [], "Object is converted to string internally and no locale is found");
            print(Intl.getCanonicalLocales({}), [], "Object is converted to string internally and no locale is found");
            print(Intl.getCanonicalLocales({ '0': 'en-us' }), [], "Object is converted to string internally and no locale is found");
            print(Intl.getCanonicalLocales(['en-us', { toString: () => 'en-us' }]), ['en-US'], "Element is an Object whose toString produces a valid language tag");
            print(Intl.getCanonicalLocales({ toString: () => 'en-us' }), [], "Argument is an Object which doesn't have any numeric indexes");

            
            
            
            
            print(function () { Intl.getCanonicalLocales(['en-us', null]) }, TypeError, "null is not String or Object.");
            print(function () { Intl.getCanonicalLocales(['en-us', 1]) }, TypeError, "Number is not String or Object.");
            print(function () { Intl.getCanonicalLocales(['en-us', 3.14]) }, TypeError, "Number is not String or Object.");
            print(function () { Intl.getCanonicalLocales(['en-us', Infinity]) }, TypeError, "Number is not String or Object.");
            print(function () { Intl.getCanonicalLocales(['en-us', -Infinity]) }, TypeError, "Number is not String or Object.");
            print(function () { Intl.getCanonicalLocales(['en-us', NaN]) }, TypeError, "Number is not String or Object.");
            print(function () { Intl.getCanonicalLocales(['en-us', true]) }, TypeError, "Boolean is not String or Object.");
            print(function () { Intl.getCanonicalLocales(['en-us', Symbol.toStringTag]) }, TypeError, "Symbol is not String or Object.");
            
            
            print(function () { Intl.getCanonicalLocales(['en-us', /a/]) }, RangeError, "RegExp is an Object, whose toString is not a well-formed language tag.");
            print(function () { Intl.getCanonicalLocales(['en-us', /en-us/]) }, RangeError, "RegExp is an Object, whose toString is not a well-formed language tag.");
            print(function () { Intl.getCanonicalLocales(['en-us', []]) }, RangeError, "Array contained within an array. [].toString()==='' (invalid tag).");
            print(function () { Intl.getCanonicalLocales(['en-us', {}]) }, RangeError, "Object whose toString is not a well-formed language tag.");
            print(function () { Intl.getCanonicalLocales([{ '0': 'en-us' }]) }, RangeError, "Array containing object where toString() produces an invalid tag.");
        }
    },
    {
        name: "Array with holes",
        body: function () {
            let a = [];
            a[1] = 'en';
            print(Intl.getCanonicalLocales(a), ['en']);
        }
    },
    {
        name: "Array-like object (without holes)",
        body: function () {
            let locales = {
                length: 2,
                0: 'zh',
                1: 'en'
            };
            print(Intl.getCanonicalLocales(locales), ['zh', 'en']);
        }
    },
    {
        name: "Array-like object (with holes)",
        body: function () {
            let locales = {
                length: 2,
                
                1: 'en'
            };
            print(Intl.getCanonicalLocales(locales), ['en']);
        }
    },
    {
        name: "Array-like class with numeric getters (without holes)",
        body: function () {
            class x {
                get 0() { return 'zh'; }
                get 1() { return 'en'; }
                get length() { return 2; }
            }
            let locales = new x();
            print(Intl.getCanonicalLocales(locales), ['zh', 'en']);
        }
    },
    {
        name: "Array-like class with numeric getters (with holes)",
        body: function () {
            class x {
                
                get 1() { return 'en'; }
                get length() { return 2; }
            }
            let locales = new x();
            print(Intl.getCanonicalLocales(locales), ['en']);
        }
    },
    {
        name: "Array-like class with numeric getters (with base class closing the hole)",
        body: function () {
            class base {
                get 0() { return 'jp'; } 
            }
            class x extends base {
                
                get 1() { return 'en'; }
                get length() { return 2; } 
            }
            let locales = new x();
            print(Intl.getCanonicalLocales(locales), ['jp', 'en']);
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
