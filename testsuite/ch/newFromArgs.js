





Array.prototype[1] = 100;
function f(param)
{
    var a = new Array(1, param, 3);
    return a;
}

var a1 = f(undefined)[1];
var a2 = f(undefined)[1];

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`${a1}`, true);
    telemetryLog(`${a2}`, true);  

    emitTTDLog(ttdLogURI);
}
