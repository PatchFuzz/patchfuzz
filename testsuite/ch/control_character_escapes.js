




WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

function matchRegExp(str, regexpLiteral, expectedResult)
{
    matchResultLiteral = str.match(regexpLiteral);
    errorMsgBase = "Expected result of match between string: '" + str + "' and regular expression: " + regexpLiteral + " to be " + 
                    expectedResult + " but was "

    actualResultLiteral = matchResultLiteral == null ? null : matchResultLiteral[0];
    assert.areEqual(expectedResult, actualResultLiteral, errorMsgBase + actualResultLiteral); 
    
    regexpConstructor = new RegExp(regexpLiteral);
    matchResultConstructor = str.match(regexpConstructor);

    actualResultConstructor = matchResultConstructor == null ? null : matchResultConstructor[0];
    assert.areEqual(expectedResult, actualResultConstructor, errorMsgBase + actualResultConstructor); 
}

var tests = [
    {
        name : "Control characters followed by a word character ([A-Za-z0-9_])",
        body : function () 
        {
            re = /[\c6]+/; 
            matchRegExp("6", re, null);
            matchRegExp("\\", re, null);
            matchRegExp("\\c6", re, null);
            matchRegExp("c", re, null);
            matchRegExp("\x16", re, "\x16");
            
            re = /\c6/; 
            matchRegExp("\\c6", re, "\\c6");
            matchRegExp("\\", re, null);
            matchRegExp("6", re, null);
            matchRegExp("c", re, null);
            matchRegExp("\x16", re, null);
            
            re = /\c6[\c6]+/; 
            matchRegExp("\\c6\x16", re, "\\c6\x16");
            matchRegExp("\\", re, null);
            matchRegExp("c", re, null);
            matchRegExp("\x16", re, null);
            
            re = /[\ca]+/; 
            matchRegExp("a", re, null);
            matchRegExp("\\", re, null);
            matchRegExp("c", re, null);
            matchRegExp("00xyzabc123\x01qrst", re, "\x01");
	    
            re = /[\c_]+/; 
            matchRegExp("\x1F\x1F\x05", re, "\x1F\x1F");
            matchRegExp("\\\\\\", re, null);
            matchRegExp("
            matchRegExp("ccc_", re, null);
            
            re = /[\cG]*/; 
            matchRegExp("\x07\x06\x05", re, "\x07");
            matchRegExp("\\\\", re, "");
            matchRegExp("
            matchRegExp("cccG", re, "");
            
            re = /[\cG\c6\cf]+/; 
            matchRegExp("\x00\x03\x07\x06\x16\x07\x08", re, "\x07\x06\x16\x07");
            matchRegExp("\\\\", re, null);
            matchRegExp("
            matchRegExp("cfG6", re, null);
            
            re = /\cG\cf/; 
            matchRegExp("\x00\x03\x07\x06\x16\x07\x08", re, "\x07\x06");
            matchRegExp("\\", re, null);
            matchRegExp("/", re, null);
            matchRegExp("\\cG\\c6\\cf", re, null);
            
            re = /[\cz\cZ]+/; 
            matchRegExp("\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f" + 
                        "\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f", re, "\x1a");
            matchRegExp("\\\\", re, null);
            matchRegExp("
            matchRegExp("ccczZ", re, null);
        }
    },
    {
        name : "Control characters followed by a non-word character ([^A-Za-z0-9_])",
        body : function () 
        {
            re = /[\c*]+/; 
            matchRegExp("\x0a\x09\x08", re, null);
            matchRegExp("a*c*b*d*", re, "*c*");
            matchRegExp("\\\\", re, "\\\\");
            matchRegExp("
            matchRegExp("ccc", re, "ccc");
            
            re = /[\c}]*/; 
            matchRegExp("\x1d\x7d\x3d", re, "");
            matchRegExp("}c}}cd*c*b*d*", re, "}c}}c");
            matchRegExp("\\\\", re, "\\\\");
            matchRegExp("
            matchRegExp("ccc", re, "ccc");
            
            re = /[\c;]+/; 
            matchRegExp("\x1b\x1c", re, null);
            matchRegExp("d;c;d;*", re, ";c;");
            matchRegExp("\\\\", re, "\\\\");
            matchRegExp("
            matchRegExp("ccc", re, "ccc");
            
            re = /\c%/; 
            matchRegExp("\\", re, null);
            matchRegExp("\\", re, null);
            matchRegExp("\\c%", re, "\\c%");
            matchRegExp("\x05", re, null);
        }
    },
    {
        name : "Control Character tests with unicode flag present",
        body : function () 
        {
            re = /[\cAg]+/u; 
            matchRegExp("abcdefghi", re, "g");
            matchRegExp("\\\\", re, null);
            matchRegExp("
            matchRegExp("\x01\x01gg\x02\x04ggg", re, "\x01\x01gg");            
            
            re = /[\czA]+/u;  
            matchRegExp("abcdefghi", re, null);
            matchRegExp("\\\\", re, null);
            matchRegExp("
            matchRegExp("YZA\x1aABC", re, "A\x1aA");    
            
            assert.throws(() => eval("\"\".match(/[\\c]/u)"), SyntaxError, "(Character class) Expected an error because escaped c must be followed by a letter when unicode flag is present, but is followed by no character here.", 
                        "Invalid regular expression: invalid escape in unicode pattern");
            assert.throws(() => eval("\"\".match(/[\\c-d]/u)"), SyntaxError, "(Character class) Expected an error because escaped c must be followed by a letter when unicode flag is present, but is followed by a dash, '-', here.", 
                        "Invalid regular expression: invalid escape in unicode pattern");
            assert.throws(() => eval("\"\".match(/[ab\\c_$]/u)"), SyntaxError, "(Character class) Expected an error because escaped c must be followed by a letter when unicode flag is present, but is followed by an underscore, '_', here.",
                        "Invalid regular expression: invalid escape in unicode pattern");
            assert.throws(() => eval("\"\".match(/[ab\\c\\d]/u)"), SyntaxError, "(Character class) Expected an error because escaped c must be followed by a letter when unicode flag is present, but is followed by a backslash, '\\', here.", 
                        "Invalid regular expression: invalid escape in unicode pattern");
            assert.throws(() => eval("\"\".match(/[ab\\c3]/u)"), SyntaxError, "(Character class) Expected an error because escaped c must be followed by a letter when unicode flag is present, but is followed by a number, '3', here.", 
                        "Invalid regular expression: invalid escape in unicode pattern");
                        
            re = /\cAg/u;  
            matchRegExp("abcdefghi", re, null);
            matchRegExp("\\\\", re, null);
            matchRegExp("
            matchRegExp("\x01\x01gg\x02\x04ggg", re, "\x01g");            
            
            re = /\czA/u;  
            matchRegExp("abcdefghi", re, null);
            matchRegExp("\\\\", re, null);
            matchRegExp("
            matchRegExp("YZA\x1aABC", re, "\x1aA");   
            
            assert.throws(() => eval("\"\".match(/\\c/u)"), SyntaxError, "(Non-character class) Expected an error because escaped c must be followed by a letter when unicode flag is present, but is followed by no character here.", 
                        "Invalid regular expression: invalid escape in unicode pattern");
            assert.throws(() => eval("\"\".match(/\\c-d/u)"), SyntaxError, "(Non-character class) Expected an error because escaped c must be followed by a letter when unicode flag is present, but is followed by a dash, '-', here.", 
                        "Invalid regular expression: invalid escape in unicode pattern");
            assert.throws(() => eval("\"\".match(/ab\\c_$/u)"), SyntaxError, "(Non-character class) Expected an error because escaped c must be followed by a letter when unicode flag is present, but is followed by an underscore, '_', here.",
                        "Invalid regular expression: invalid escape in unicode pattern");
            assert.throws(() => eval("\"\".match(/ab\\c\\d/u)"), SyntaxError, "(Non-character class) Expected an error because escaped c must be followed by a letter when unicode flag is present, but is followed by a backslash, '\\', here.", 
                        "Invalid regular expression: invalid escape in unicode pattern");
            assert.throws(() => eval("\"\".match(/ab\\c3/u)"), SyntaxError, "(Non-character class) Expected an error because escaped c must be followed by a letter when unicode flag is present, but is followed by a number, '3', here.", 
                        "Invalid regular expression: invalid escape in unicode pattern");
        }
    },
    {
        name : "Control character edge cases",
        body : function () 
        {
            re = /[\c-g]+/; 
            matchRegExp("abcdefghi", re, "cdefg");
            matchRegExp("\\\\", re, "\\\\");
            matchRegExp("
            matchRegExp("\x0d", re, null);
            matchRegExp("aobd\\f\\d", re, "d\\f\\d");            
            
            re = /[\c-]+/; 
            matchRegExp("abcdefghi", re, "c");
            matchRegExp("\x0dc--c", re, "c--c");
            matchRegExp("\\\\", re, "\\\\");
            matchRegExp("
            matchRegExp("aobd\\f\\d", re, "\\");  
            
            assert.throws(() => eval("\"\".match(/[\\c-a]/)"), SyntaxError, "Expected an error due to 'c-a' being an invalid range.", "Invalid range in character set");
        }
    }
];

testRunner.runTests(tests, {
    verbose : WScript.Arguments[0] != "summary"
});
