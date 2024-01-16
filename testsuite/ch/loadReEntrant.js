




WScript.LoadScriptFile('../../test/TTBasic/loadTarget.js');

var msgFunction = foo('World');

var msg0 = msgFunction();

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`msg0: ${msg0}`, true); 
        
    telemetryLog(`msgFunction() -- 1: ${msgFunction()}`, true); 
    telemetryLog(`msgFunction() -- 2: ${msgFunction()}`, true); 

    emitTTDLog(ttdLogURI);
}