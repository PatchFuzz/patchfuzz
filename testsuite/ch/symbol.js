




var x = 'Hello';

var xs = Symbol("Hello");
var ys = xs;

var zs = Symbol("Hello");

var obj = {};
obj[x] = 1;
obj[xs] = 2;
obj[zs] = 3;

var symObj = Object(zs);

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`typeof zs: ${typeof(zs)}`, true); 
    telemetryLog(`typeof symObj: ${typeof(symObj)}`, true); 
    
    telemetryLog(`xs == ys: ${xs == ys}`, true); 
    telemetryLog(`xs == zs: ${xs == zs}`, true); 

    telemetryLog(`obj[x]: ${obj[x]}`, true); 
    telemetryLog(`obj.Hello: ${obj.Hello}`, true); 

    telemetryLog(`obj[xs]: ${obj[xs]}`, true); 
    telemetryLog(`obj[ys]: ${obj[ys]}`, true); 

    telemetryLog(`obj[zs]: ${obj[zs]}`, true); 
    telemetryLog(`obj[symObj]: ${obj[symObj]}`, true); 

    emitTTDLog(ttdLogURI);
}