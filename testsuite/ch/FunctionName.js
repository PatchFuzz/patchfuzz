








function Dump(output) {
    if (this.WScript) {
        WScript.Echo(output);
    } else {
        alert(output);
    }
}

if (this.WScript && this.WScript.LoadScriptFile) {
    this.WScript.LoadScriptFile("../UnitTestFramework/TrimStackTracePath.js");
}

try {
    var foo = function() {
        throw new Error("My Error!");
    };

    function func(){
        foo();
    }

    var constructed = new Function("func();");

    function bar(){
        (function(){
            eval("constructed();");
        })();
    }

    bar();

} catch(e) {
    Dump(TrimStackTracePath(e.stack));
}
