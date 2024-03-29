




var A = new Uint8Array(100);
var str = "123.12";

function FAIL(x, y)
{
    WScript.Echo("FAILED\n");
    WScript.Echo("Expected "+y+", got "+x+"\n");
    throw "FAILED";
}

function foo()
{
    var y = 0;
    for (var i = 0; i < 100; i+=4) {
        A[i] = i;
    A[i+1] = i + 0xf0;
        A[i+2] = i+0.34;
    A[i+3] = str;
    }

    for (var i = 0; i < 100; i++)
    {
        y += A[i];
    A[i] = 0;
    }
    return y;
}

var expected = 7299;
var r;

for (var i = 0; i < 1000; i++)
{
    r = foo();

    if (r !== expected)
        FAIL(r, expected);
}

WScript.Echo("Passed\n");
