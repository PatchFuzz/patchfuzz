




function f()
{
    return "called f";
}
f.foo = 3;
            
var g = f;

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`f !== null: ${f !== null}`, true); 
    telemetryLog(`f === g: ${f === g}`, true); 
    telemetryLog(`g.foo: ${g.foo}`, true); 

    telemetryLog(`f(): ${f()}`, true); 
    telemetryLog(`g(): ${g()}`, true); 

    emitTTDLog(ttdLogURI);
}