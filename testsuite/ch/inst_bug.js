




var Failed = false;

function FAIL() { Failed = true; }

function test() {
    var x = x instanceof x;
    function x() { };
    if (x !== false)
    FAIL();
};

test();
test();

if (!Failed)
    WScript.Echo("Passed");
