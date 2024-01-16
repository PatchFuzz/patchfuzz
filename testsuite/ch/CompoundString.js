




WScript.LoadScriptFile("CompoundStringUtilities.js", "self");

CompoundString.createTestStrings(); 
var strings = CompoundString.createTestStrings();
for(var i = 0; i < strings.length; ++i)
    WScript.Echo(i + ": " + strings[i]);
