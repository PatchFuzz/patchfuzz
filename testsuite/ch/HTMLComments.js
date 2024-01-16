






WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");


 

WScript.Echo("Code before CRLF--> is reachable");
--> WScript.Echo("Code after CRLF--> is unreachable");


WScript.Echo("Code before CR--> is reachable");
--> WScript.Echo("Code after CR--> is unreachable");


WScript.Echo("Code before LF--> is reachable");
--> WScript.Echo("Code after LF--> is unreachable");


WScript.Echo("Code before LS--> is reachable"); --> WScript.Echo("Code after LS--> is unreachable");


WScript.Echo("Code before PS--> is reachable"); --> WScript.Echo("Code after PS--> is unreachable");




WScript.Echo("Code before CRLS--> is reachable");
 --> WScript.Echo("Code after CRLS--> is unreachable");


WScript.Echo("Code before CRPS--> is reachable");
 --> WScript.Echo("Code after CRPS--> is unreachable");


WScript.Echo("Code before <!-- is reachable"); <!-- WScript.Echo("Code after <!-- is unreachable");
WScript.Echo("Code before <!-- --> is reachable"); <!-- --> WScript.Echo("Code after <!-- --> is unreachable");


WScript.Echo("Code before <!-- LineTerminator --> is reachable"); <!-- WScript.Echo("Code after multiline <!-- is unreachable");
--> WScript.Echo("Code after <!-- LineTerminator --> is unreachable");


 --> WScript.Echo("Code after */ --> is unreachable");
assert.throws(function () { eval(' --> WScript.Echo("Code after  --> is parsed");'); }, SyntaxError, "MultiLineComment without a line terminator throws a syntax error",                         "Unexpected token '>' after '--'");
assert.throws(function () { eval('--> WScript.Echo("Code after --> is parsed");'); },   SyntaxError, "MultiLineComment without a line terminator and whitespace sequence throws a syntax error", "Unexpected token '>' after '--'");
{
    let x = 0;
    if (x--> -1) {
        assert.areEqual(-1, x, "MultiLineComment without a line terminator does not parse --> as a HTML comment");
    } else {
        WScript.Echo('MultiLineComment without a line terminator test is broken!');
    }
}


var a = 1; a-->a; WScript.Echo("Code after post-decrement with a greater-than comparison (-->) is reachable");
assert.areEqual(0, a, "Post decrement executes");

assert.throws(function () { eval(' --->'); }, SyntaxError, "HTMLCloseComment causes syntax error with an extra -", "Unexpected token '>' after '-'");
