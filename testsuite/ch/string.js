




var x = 'Hello';
var y = 'World';
var empty = '';

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`x: ${x}`, true); 
    telemetryLog(`y: ${y}`, true); 

    telemetryLog(`empty.length: ${empty.length}`, true); 
    telemetryLog(`x.length: ${x.length}`, true); 
    telemetryLog(`x + \' \' + y: ${x + ' ' + y}`, true); 

    emitTTDLog(ttdLogURI);
}