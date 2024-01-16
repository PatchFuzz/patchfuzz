




if (this.WScript && this.WScript.LoadScriptFile) {
    this.WScript.LoadScriptFile("../UnitTestFramework/TrimStackTracePath.js");
}

function bar(a)
{
    for(var i = 0; i<4; i++)
    {
        for(var j = 0; j<4; j++)
        {
            try
            {
                baz();
            }
            catch(ex)
            {
                WScript.Echo(TrimStackTracePath(ex.stack));
            }
        }
    }
}
bar(1);
