print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Case-folding should be applied for a single character pattern when the unicode flag is present",
        body: function () {
            print(/a/ui.test("A"), "UnicodeData fallback");
            print(/\u004b/ui.test("\u212a"), "Code unit");
        }
    },
    {
        name: "Case-folding should NOT be applied for a single character pattern when the unicode flag is NOT present",
        body: function () {
            print(/\u004b/i.test("\u212a"));
        }
    },
    {
        name: "Case-folding should be applied for a single character term when the unicode flag is present",
        body: function () {
            print(/aa|b/ui.test("B"), "UnicodeData fallback");
            print(/aa|\u004b/ui.test("\u212a"), "Code unit");
        }
    },
    {
        name: "Case-folding should NOT be applied for a single character term when the unicode flag is NOT present",
        body: function () {
            print(/aa|\u004b/i.test("\u212a"));
        }
    },
    {
        name: "Case-folding should be applied for literals using literal instruction when the unicode flag is present",
        body: function () {
            print(/^aaa/ui.test("aaA"), "MatchLiteralInst: UnicodeData fallback");
            print(/^aa\u004b/ui.test("aa\u212a"), "MatchLiteralInst: Code unit");

            print(/aaa/ui.test("aaA"), "SyncToLiteral...Inst: UnicodeData fallback");
            print(/aa\u004b/ui.test("aa\u212a"), "SyncToLiteral...Inst: Code unit");

            print(/aa\u{10429}/ui.test("aa\u{10401}"), "Code point in both RegExp and string to test");
            print(/aa\u{10429}/ui.test("aa\ud801\udc01"), "Code point in RegExp and surrogate pair in string to test");
            print(/aa\ud801\udc29/ui.test("aa\u{10401}"), "Surrogate pair in RegExp and code point in string to test");
            print(/aa\ud801\udc29/ui.test("aa\ud801\udc01"), "Surrogate pair in both RegExp and string to test");
            print(/aa\u{10429}\u{10429}/ui.test("aa\u{10401}\u{10401}"), "Multiple code points");
            print(/aa\ud801\udc29\ud801\udc29/ui.test("aa\ud801\udc29\ud801\udc29"), "Multiple surrogate pairs");
        }
    },
    {
        name: "Case-folding should NOT be applied for literals using literal instruction when the unicode flag is NOT present",
        body: function () {
            print(/^aa\u004b/i.test("aa\u212a"), "MatchLiteralInst");
            print(/aa\u004b/i.test("aa\u212a"), "SyncToLiteral...Inst");
        }
    },
    {
        name: "Case-folding should be applied for character sets when the unicode flag is present",
        body: function () {
            print(/^[ab]/ui.test("A"), "MatchSetInst: UnicodeData fallback");
            print(/^[a\u004b]/ui.test("\u212a"), "MatchSetInst: Code unit");

            print(/[ab]/ui.test("A"), "SyncToSet...Inst: UnicodeData fallback");
            print(/[a\u004b]/ui.test("\u212a"), "SyncToSet...Inst: Code unit");

            print(/[a\u{10429}]/ui.test("\u{10401}"), "Code point in both RegExp and in string to test");
            print(/[a\u{10429}]/ui.test("\ud801\udc01"), "Code point in RegExp and surrogate pair in string to test");
            print(/[a\ud801\udc29]/ui.test("\u{10401}"), "Surrogate pair in RegExp and code point in string to test");
            print(/[a\ud801\udc29]/ui.test("\ud801\udc01"), "Surrogate pair in both RegExp and string to test");
            print(/[\u{10428}-\u{10430}]/ui.test("\u{10401}"), "Code point range");
            print(/[\ud801\udc28-\ud801\udc30]/ui.test("\ud801\udc01"), "Surrogate pair range");
        }
    },
    {
        name: "Case-folding should NOT be applied for character sets when the unicode flag is NOT present",
        body: function () {
            print(/^[a\u004b]/i.test("\u212a"), "MatchSetInst");
            print(/[a\u004b]/i.test("\u212a"), "SyncToSet...Inst");
        }
    },
    {
        name: "Case-folding should be applied for back references when the unicode flag is present",
        body: function () {
            print(/(a)\1/ui.test("aA"), "UnicodeData fallback");
            print(/(\u004b)\1/ui.test("\u004b\u212a"), "Code unit");
            print(/(\u{10429})\1/ui.test("\u{10429}\u{10401}"), "Code point in both RegExp and string to test");
            print(/(\u{10429})\1/ui.test("\u{10429}\ud801\udc01"), "Code point in RegExp and surrogate pair in string to test");
            print(/(\ud801\udc29)\1/ui.test("\ud801\udc29\u{10401}"), "Surrogate pair in RegExp and code point in string to test");
            print(/(\ud801\udc29)\1/ui.test("\ud801\udc29\ud801\udc29"), "Surrogate pair in both RegExp and string to test");
            print(/(\u{10429}\u{10429})\1/ui.test("\u{10429}\u{10429}\u{10401}\u{10401}"), "Multiple code points");
            print(/(\ud801\udc29\ud801\udc29)\1/ui.test("\ud801\udc29\ud801\udc29\ud801\udc01\ud801\udc01"), "Multiple surrogate pairs");
        }
    },
    {
        name: "Case-folding should NOT be applied for back references when the unicode flag is NOT present",
        body: function () {
            print(/(\u004b)\1/i.test("\u004b\u212a"), "Code unit");
        }
    },
    {
        name: "Case-folding should be applied for quantifiers when the unicode flag is present",
        body: function () {
            print(/^aa(?:\u004b)?/ui.test("aa\u212a"), "?");
            print(/^aa(?:\u004b)+/ui.test("aa\u004b\u212a"), "+");
            print(/^aa(?:\u004b)*/ui.test("aa\u004b\u212a"), "*");
            print(/^aa(?:\u004b){2}/ui.test("aa\u004b\u212a"), "{2}");
        }
    },
    {
        name: "Up to four code points should be in the same case-folding equivalence group",
        body: function () {
            var equivs = ["0399", "03b9", "1fbe"];
            equivs.forEach(function (hex) {
                var equivChar = eval("'\\u" + hex + "'");
                print(/\u0345/ui.test(equivChar), "\\u0345 -> \\u" + hex + " as a single character pattern");
                print(/^\u0345/ui.test(equivChar), "MatchChar4Inst: \\u0345 -> \\u" + hex + " as a single character pattern");
                print(/aa|\u0345/ui.test(equivChar), "SyncToSetAndContinue: \\u0345 -> \\u" + hex + " as a single character term");
                print(/aa\u0345/ui.test("aa" + equivChar), "\\u0345 -> \\u" + hex + " in literal");
                print(/[a\u0345]/ui.test(equivChar), "\\u0345 -> \\u" + hex + " in character set");
                print(/(\u0345)\1/ui.test("\u0345" + equivChar), "\\u0345 -> \\u" + hex + " in back reference");
            });
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
