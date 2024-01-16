








function Dump(output)
{
    if (this.WScript)
    {
        WScript.Echo(output);
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

if (this.WScript && this.WScript.LoadScriptFile) {
    this.WScript.LoadScriptFile("../UnitTestFramework/TrimStackTracePath.js");
}

runtest();