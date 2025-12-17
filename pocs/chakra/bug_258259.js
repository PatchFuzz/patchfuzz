






var expectedError = "Error: aİc\n\tat aTurkish (bug_258259.js:12:5)\n\tat Global code (bug_258259.js:34:9)";


function aTurkish() {
    throw Error("aİc");
}

function filterFullFilePathFromCallstack(cs) {
    var filteredStack = cs;
    var fileName = "bug_258259.js:";
    var startDelim = " (";

    
    var lastInd = filteredStack.lastIndexOf(fileName);
    var firstInd = filteredStack.lastIndexOf(startDelim, lastInd);
    filteredStack = filteredStack.substring(0, firstInd + startDelim.length) + filteredStack.substring(lastInd);

    lastInd = filteredStack.lastIndexOf(fileName);
    lastInd = filteredStack.lastIndexOf(fileName, lastInd - 1);
    firstInd = filteredStack.lastIndexOf(startDelim, lastInd);
    filteredStack = filteredStack.substring(0, firstInd + startDelim.length) + filteredStack.substring(lastInd);

    return filteredStack;
}

try {
        aTurkish();
} catch (ex) {
    var filteredStack = filterFullFilePathFromCallstack([ex.stack].toString());

    if (filteredStack == expectedError) {
        print("PASS");
    } else {
        print("FAILED");
        print("\nActual (raw):\n" + [ex.stack]);
        print("\nActual (filtered):\n" + filteredStack);
        print("\n\nExpected:\n" + expectedError);
    }
}
