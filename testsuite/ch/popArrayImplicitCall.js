




var obj = {};

Object.prototype.push = Array.prototype.push;
Object.prototype.pop = Array.prototype.pop;
var x;
Object.defineProperty(obj, "length", {get: function() {x = true; return 5;}});

x = false;


WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    try
    {
        var len = obj.pop();
    }
    catch (e)
    {
        telemetryLog('caught exception calling pop', true);
    }

    telemetryLog(`${x}`, true);
    telemetryLog(`${len}`, true);

    emitTTDLog(ttdLogURI);
}
