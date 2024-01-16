




WScript.LoadScriptFile("../UnitTestFramework/known_globals.js");

for (a in this) {
    if (isKnownGlobal(a))
        continue;
    WScript.Echo(a);
}


const x = 10;
WScript.Echo(x);
{
    const x = 20;
    WScript.Echo(x);
}
WScript.Echo(x);



for (a in this) {
    if (isKnownGlobal(a))
        continue;
    WScript.Echo(a);
}

