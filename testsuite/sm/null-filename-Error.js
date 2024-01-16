

var exc = null;
try {
    evaluate("throw Error('pass');", {fileName: null});
} catch (x) {
    exc = x;
}
assertEq(exc.constructor, Error);
assertEq(exc.message, "pass");
assertEq(exc.fileName, "");
