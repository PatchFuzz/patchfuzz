




if (this.WScript && this.WScript.LoadScriptFile) {
    this.WScript.LoadScriptFile("../UnitTestFramework/TrimStackTracePath.js");
}

function f() { return 42; }
function main()
{
    try {
        var i = 0;
        return f() - p0;
    } catch (e) {
        console.log(TrimStackTracePath(e.stack));
    }
}

main();
