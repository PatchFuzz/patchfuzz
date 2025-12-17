function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

eval("var theVar");
$262.evalScript("let theVar = 2");
print(theVar === 2);

eval("function theTopLevelFunctionDeclaration() {}");
$262.evalScript("const theTopLevelFunctionDeclaration = 4");
print(theTopLevelFunctionDeclaration === 4);

eval("if (true) { function theHoistedBlockLevelFunctionDeclaration() {} }");
$262.evalScript("let theHoistedBlockLevelFunctionDeclaration = 6");
print(theHoistedBlockLevelFunctionDeclaration === 6);
