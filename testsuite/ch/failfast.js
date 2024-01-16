




function empty() { }
WScript.Attach(empty)
WScript.Detach(empty)

for (var i = 0; i < 10; i++)
{
    function emptyn() { }
    WScript.Attach(emptyn)
    WScript.Detach(emptyn)
}

print("PASS")