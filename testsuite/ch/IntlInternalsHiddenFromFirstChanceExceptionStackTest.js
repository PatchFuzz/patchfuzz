





if (this.WScript) { WScript.LoadScriptFile("../UnitTestFramework/TrimStackTracePath.js"); }

function testFirstChanceException() {
    var formatter = new Intl.NumberFormat("INVALID CURRENCY CODE");
}

try {
    testFirstChanceException();
}
catch (ex) {
    WScript.Echo(TrimStackTracePath(ex.stack));
}
