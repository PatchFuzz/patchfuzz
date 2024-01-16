




var x = new Set();
var y = x;
y.baz = 5;

var z = new Set();
z.add(5);

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`x === y: ${x === y}`, true); 
    telemetryLog(`x.baz: ${x.baz}`, true); 
    telemetryLog(`z.size: ${z.size}`, true); 
    telemetryLog(`z.has(5): ${z.has(5)}`, true); 

    
    x.add(3);
    z.delete(3);
    z.delete(5);
    

    telemetryLog(`post update 1 -- y.has(3): ${y.has(3)}`, true); 
    telemetryLog(`post update 1 -- z.size: ${z.size}`, true); 
    telemetryLog(`post update 1 -- z.has(5): ${z.has(5)}`, true); 

    
    y.add(3);
    y.add(5);
    

    telemetryLog(`post update 2 -- x.has(5): ${x.has(5)}`, true); 
    telemetryLog(`post update 2 -- x.size: ${x.size}`, true); 

    emitTTDLog(ttdLogURI);
}