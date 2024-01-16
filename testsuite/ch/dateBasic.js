




var x = new Date();
var y = x;

var z = new Date(2012, 1);

y.foo = 3;

var w = Date.now();

var dinfty = new Date(Infinity);

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`x === y: ${x === y}`, true); 
    telemetryLog(`w !== z: ${w !== z.valueOf()}`, true); 

    telemetryLog(`y.foo: ${y.foo}`, true); 
    telemetryLog(`x.foo: ${x.foo}`, true); 

    telemetryLog(`w - z > 0: ${w - z.valueOf() > 0}`, true); 
    telemetryLog(`x - y: ${x.valueOf() - y.valueOf()}`, true); 

    try 
    {
        telemetryLog(dinfty.toISOString(), true);
    } 
    catch(e) 
    {
        telemetryLog(`Infinity Date toISOString : ${e.name}  : ${e.message}`, true);
    }
    telemetryLog(`Infinity Date toJSON : ${dinfty.toJSON()}`, true);

    emitTTDLog(ttdLogURI);
}