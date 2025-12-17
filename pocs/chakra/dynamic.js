function Dump(output)
{
    if (print)
    {
        print(output);
    }
    else
    {
        alert(output);
    }
}

function runtest()
{
    try {
        (function () {
            var f = new Function("function foo(){ throw new Error('This is my error'); } foo();");
            f();
        })();
    } catch(e) {
        Dump(TrimStackTracePath(e.stack));
    }
}

if (print && print) {
    print("../UnitTestFramework/TrimStackTracePath.js");
}

runtest();