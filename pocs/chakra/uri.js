var v0 = 48, v9 = 57, vA = 65, vZ = 90, va = 97, vz = 122;

var nonHexWideCharValues =
[
    
    v0 - 1, v9 + 1,
    vA - 1, vZ + 1,
    va - 1, vz + 1,

    
    
    65296, 65297, 65298, 65299, 65300, 65301, 65302, 65303,
    65304, 65305, 65313, 65314, 65315, 65316, 65317, 65318,
    65345, 65346, 65347, 65348, 65349, 65350
];

writeLine("First character invalid in %-encoded URI component:");
for (var i in nonHexWideCharValues)
{
    var testResult = "    " + nonHexWideCharValues[i] + ": ";
    try
    {
        decodeURIComponent("%" + String.fromCharCode(nonHexWideCharValues[i]) + "0");
        testResult += "Fail (no exception)";
    }
    catch (ex)
    {
        testResult += "Pass (" + ex.name + ": " + ex.message + ")";
    }

    writeLine(testResult);
}
writeLine("");

writeLine("Second character invalid in %-encoded URI component:");
for (var i in nonHexWideCharValues)
{
    var testResult = "    " + nonHexWideCharValues[i] + ": ";
    try
    {
        decodeURIComponent("%0" + String.fromCharCode(nonHexWideCharValues[i]));
        testResult += "Fail (no exception)";
    }
    catch (ex)
    {
        testResult += "Pass (" + ex.name + ": " + ex.message + ")";
    }

    writeLine(testResult);
}
writeLine("");



function writeLine(str)
{
    print("" + str);
}
