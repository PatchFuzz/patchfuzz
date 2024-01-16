


function shouldBe(actual, expected)
{
    if (actual !== expected)
        throw new Error("Bad value: , expected \"" + expected + "\", but got \"" + actual + "\"");
}

function shouldThrow(run, errorType)
{
    let actual;
    var hadError = false;

    try {
        actual = run();
    } catch (e) {
        hadError = true;
        actual = e;
    }

    if (!hadError)
        throw new Error("Expected " + run + "() to throw " + errorType.name + ", but did not throw.");
    if (!(actual instanceof errorType))
        throw new Error("Expeced " + run + "() to throw " + errorType.name + " , but threw '" + actual + "'");
}


shouldThrow(() => RegExp('a?'.repeat(2**19) + 'b').exec('x'), SyntaxError);


shouldBe(RegExp('a?'.repeat(2**19)).exec('x')[0], "");

