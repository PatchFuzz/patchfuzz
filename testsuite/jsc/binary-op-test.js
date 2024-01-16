



















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
function generateBinaryTests(tests, opName, op, operandTypes, leftValues, rightValues) {
    var funcNamePrefix = opName + operandTypes;
    for (var i = 0; i < leftValues.length; i++) {
        for (var j = 0; j < rightValues.length; j++) {
            var test = { };
            xStr = leftValues[i];
            yStr = rightValues[j];
            test.x = eval(xStr);
            test.y = eval(yStr);

            var funcName = funcNamePrefix + funcIndex++;
            if (operandTypes == "VarVar") {
                test.signature = funcName + "(x, y) { return x " + op + " y }";
                test.name = test.signature + " with x:" + xStr + ", y:" + yStr;
            } else if (operandTypes == "VarConst") {
                test.signature = funcName + "(x, _) { return x " + op + " " + yStr + " }";
                test.name = test.signature + " with x:" + xStr;
            } else if (operandTypes == "ConstVar") {
                test.signature = funcName + "(_, y) { return " + xStr + " " + op + " y }";
                test.name = test.signature + " with y:" + yStr;
            }

            test.func = eval("(function " + test.signature + ")");
            noInline(test.func);

            test.expectedResult = test.func(test.x, test.y);
            test.name += ", expected:" + stringifyIfNeeded(test.expectedResult);

            tests.push(test);
            if (verboseTestGeneration)
                print("Generated " + test.name);
        }
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
        for (var i = 0; i < 10000; i++) {
            var result = test.func(test.x, test.y);
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
