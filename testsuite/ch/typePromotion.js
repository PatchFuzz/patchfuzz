









var o1 = {},o2 = {};

o1.x = "A";
o1.y = "B";

o2.y = "C";
o2.x = "D";

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(o1.x, true);
    telemetryLog(o1.y, true);
    telemetryLog(o2.x, true);
    telemetryLog(o2.y, true);

    emitTTDLog(ttdLogURI);
}