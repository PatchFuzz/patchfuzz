















var numberOfCapturedVariables = 6621;
function use() { }
function makeFunction() { 
    var varName;
    var outerFunction = "";
    var innerFunction = "";

    for (var i = 0; i < numberOfCapturedVariables; i++) {
        varName = "_" + i;
        outerFunction += "var " + varName + ";";
        innerFunction += "use(" + varName + ");";
    }
    outerFunction += "function foo() {" + innerFunction + "}";
    var functionString = "(function() { " + outerFunction + "})";
    var result = eval(functionString);
    return result;
}

var arr = [];
for (var i = 0; i < 50; i++) {
    var f = makeFunction();
    f();
    fullGC();
}

