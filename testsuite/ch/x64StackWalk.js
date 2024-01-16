




if (this.WScript && this.WScript.LoadScriptFile) {
    this.WScript.LoadScriptFile("../UnitTestFramework/TrimStackTracePath.js");
}

function foo(a)
{
    try{
        baz();
    }catch(ex){
        WScript.Echo(TrimStackTracePath(ex.stack));
    }
    try{
        baz();
    }catch(ex){
        WScript.Echo(TrimStackTracePath(ex.stack));
    }
}
foo(1);
foo(1);
foo(1.1);
