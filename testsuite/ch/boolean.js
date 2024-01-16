




var x = true;
var y = false;

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`x: ${x}`, true); 
    telemetryLog(`y: ${y}`, true); 

    telemetryLog(`x === y: ${x === y}`, true); 

    telemetryLog(`x && y: ${x && y}`, true); 
    telemetryLog(`x || y: ${x || y}`, true); 

    emitTTDLog(ttdLogURI);
}