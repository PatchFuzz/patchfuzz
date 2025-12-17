var verbose = false;
var abortOnFirstFail = false;
var testFilterStr = undefined; 

var verboseTestGeneration = false;




function stringifyIfNeeded(x) {
    if (typeof x == "string")
        return '"' + x + '"';
    if (typeof x == "object")
        return 'objWithVal:' + x;
    return x;
}





var funcIndex = 0;
function print(tests, opName, operatorType, resultType, op, inValues) {
    var funcNamePrefix = opName + resultType;
    for (var i = 0; i < inValues.length; i++) {
        var test = { };
        xStr = inValues[i];
        test.x = eval(xStr);

        var funcName = funcNamePrefix + funcIndex++;
        if (operatorType == "Prefix") {
            if (resultType == "ImmediateResult")
                test.signature = funcName + "(x) { return " + op + "x }";
            else if (resultType == "PostResult")
                test.signature = funcName + "(x) { " + op + "x; return x; }";
        } else if (operatorType == "Postfix") {
            if (resultType == "ImmediateResult")
                test.signature = funcName + "(x) { return x" + op + " }";
            else if (resultType == "PostResult")
                test.signature = funcName + "(x) { x" + op + "; return x; }";
        }

        test.name = test.signature + " with x:" + xStr;

        test.func = eval("(function " + test.signature + ")");
        noInline(test.func);

        test.expectedResult = test.func(test.x);
        test.name += ", expected:" + stringifyIfNeeded(test.expectedResult);

        tests.push(test);
        if (verboseTestGeneration)
            print("Generated " + test.name);
    }
}




var errorReport = "";

function isIdentical(x, y) {
    if (typeof x == "undefined" && typeof y == "undefined")
        return true;
    if (typeof x != typeof y)
        return false;
    if (x == y) {
        if (x)
            return true;
        
        if (1 / x == 1 / y)
            return true;
    } else if (Number.isNaN(x) && Number.isNaN(y))
        return true;
    return false;
}

function runTest(test) {
    if (testFilterStr && !test.name.includes(testFilterStr))
        return;

    var firstFailed = -1;
    try {
        if (verbose)
            print(test.name);
        for (var i = 0; i < testLoopCount; i++) {
            var result = test.func(test.x);
            if (isIdentical(result, test.expectedResult))
                continue;
            if (firstFailed < 0) {
                errorReport += "FAILED: " + test.name + " started failing on iteration " + i
                    + ": actual " + stringifyIfNeeded(result) + "\n";
                if (abortOnFirstFail)
                    throw errorReport;
                firstFailed = i;
            }
        }
    } catch(e) {
        if (abortOnFirstFail)
            throw e; 
        errorReport += "FAILED: Unexpected exception: " + e + "\n";
    }
}

function run() {
    if (verbose)
        print("Start testing");

    for (var test of tests)
        runTest(test);

    if (errorReport !== "")
        throw "Found failures:\n" + errorReport;

    if (verbose)
        print("Done testing");
}
