var exc = null;
try {
    evaluate("throw Error('pass');", {fileName: null});
} catch (x) {
    exc = x;
}
print(exc.constructor, Error);
print(exc.message, "pass");
print(exc.fileName, "");
