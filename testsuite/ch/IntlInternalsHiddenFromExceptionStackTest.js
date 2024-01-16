





if (this.WScript) { WScript.LoadScriptFile("../UnitTestFramework/TrimStackTracePath.js"); }

function testCallback() {
    var array =
    [
        {
            toString: function ()
            {
                throw new Error('Throwing...');
            }
        },
        5
    ]

    var c = new Intl.Collator();
    array.sort(c.compare);
}

try {
    testCallback();
}
catch (ex) {
    WScript.Echo(TrimStackTracePath(ex.stack));
}
