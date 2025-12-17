






print("..\\UnitTestFramework\\UnitTestFramework.js");


 

print("Code before CRLF--> is reachable");
--> print("Code after CRLF--> is unreachable");


print("Code before CR--> is reachable");
--> print("Code after CR--> is unreachable");


print("Code before LF--> is reachable");
--> print("Code after LF--> is unreachable");


print("Code before LS--> is reachable"); --> print("Code after LS--> is unreachable");


print("Code before PS--> is reachable"); --> print("Code after PS--> is unreachable");




print("Code before CRLS--> is reachable");
 --> print("Code after CRLS--> is unreachable");


print("Code before CRPS--> is reachable");
 --> print("Code after CRPS--> is unreachable");


print("Code before <!-- is reachable"); <!-- print("Code after <!-- is unreachable");
print("Code before <!-- --> is reachable"); <!-- --> print("Code after <!-- --> is unreachable");


print("Code before <!-- LineTerminator --> is reachable"); <!-- print("Code after multiline <!-- is unreachable");
--> print("Code after <!-- LineTerminator --> is unreachable");


 --> print("Code after */ --> is unreachable");
print(function () { eval(' --> print("Code after  --> is parsed");'); }, SyntaxError, "MultiLineComment without a line terminator throws a syntax error",                         "Unexpected token '>' after '--'");
print(function () { eval('--> print("Code after --> is parsed");'); },   SyntaxError, "MultiLineComment without a line terminator and whitespace sequence throws a syntax error", "Unexpected token '>' after '--'");
{
    let x = 0;
    if (x--> -1) {
        print(-1, x, "MultiLineComment without a line terminator does not parse --> as a HTML comment");
    } else {
        print('MultiLineComment without a line terminator test is broken!');
    }
}


var a = 1; a-->a; print("Code after post-decrement with a greater-than comparison (-->) is reachable");
print(0, a, "Post decrement executes");

print(function () { eval(' --->'); }, SyntaxError, "HTMLCloseComment causes syntax error with an extra -", "Unexpected token '>' after '-'");
