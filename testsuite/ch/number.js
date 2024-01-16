




var x = 3;
var y = 5;

var xd = 4.6;
var yd = 9.2;

var myInf = Infinity;

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`x: ${x}`, true); 
    telemetryLog(`y: ${y}`, true); 
    telemetryLog(`xd: ${xd}`, true); 
    telemetryLog(`yd: ${yd}`, true); 

    telemetryLog(`x + y: ${x + y}`, true); 
    telemetryLog(`x - y: ${x - y}`, true); 
    telemetryLog(`x * y: ${x * y}`, true); 
    telemetryLog(`x / y: ${x / y}`, true); 

    telemetryLog(`isFinite(xd): ${isFinite(xd)}`, true); 
    telemetryLog(`isFinite(myInf): ${isFinite(myInf)}`, true); 
    telemetryLog(`isFinite(Infinity): ${isFinite(Infinity)}`, true); 

    telemetryLog(`Math.abs(-2): ${Math.abs(-2)}`, true); 
    telemetryLog(`Math.floor(1.5): ${Math.floor(1.5)}`, true); 

    emitTTDLog(ttdLogURI);
}