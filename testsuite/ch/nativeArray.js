




var xi = [2, 1, 0];
var xd = [2.5, 1.5, 0.5];

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`Array.isArray(xi): ${Array.isArray(xi)}`, true); 
    telemetryLog(`xi.length: ${xi.length}`, true); 
    telemetryLog(`xi[1]: ${xi[1]}`, true); 

    
    xi[1] = 5;
    xi.push(10);
    

    telemetryLog(`post update -- xi[1]: ${xi[1]}`, true); 
    telemetryLog(`post update -- xi.length: ${xi.length}`, true); 
    telemetryLog(`post update -- xi[3]: ${xi[3]}`, true); 
    telemetryLog(`post update -- xi[5]: ${xi[5]}`, true); 

    telemetryLog(`Array.isArray(xd): ${Array.isArray(xd)}`, true); 
    telemetryLog(`xd.length: ${xd.length}`, true); 
    telemetryLog(`xd[1]: ${xd[1]}`, true); 

    
    xd[1] = 5.0;
    xd.push(10.0);
    xd[10] = 10.0;
    

    telemetryLog(`post update -- xd[1]: ${xd[1]}`, true); 
    telemetryLog(`post update -- xd.length: ${xd.length}`, true); 
    telemetryLog(`post update -- xd[3]: ${xd[3]}`, true); 
    telemetryLog(`post update -- xd[5]: ${xd[5]}`, true); 
    telemetryLog(`post update -- xd[10]: ${xd[10]}`, true); 

    emitTTDLog(ttdLogURI);
}