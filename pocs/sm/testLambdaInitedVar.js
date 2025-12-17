function testLambdaInitedVar() {
    var jQuery = function (a, b) {
        return jQuery && jQuery.length;
    }
    return jQuery();
}

print(testLambdaInitedVar(), 2);
