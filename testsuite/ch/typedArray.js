




var bx = new ArrayBuffer(16);
var by = bx;

var bz = new ArrayBuffer(16);

var viewx = new Int32Array(bx);
var viewy = new Int8Array(by, 4, 12);

var viewz = new Float32Array(bz);

for(var i = 0; i < viewx.length; ++i) 
{
    viewx[i] = i + 1;
}

for(var i = 0; i < viewz.length; ++i) 
{
    viewz[i] = i / 2.0;
}

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`viewx.length: ${viewx.length}`, true); 
    telemetryLog(`viewy.length: ${viewy.length}`, true); 
    telemetryLog(`bx === by: ${bx === by}`, true); 
    telemetryLog(`viewx.buffer === viewy.buffer: ${viewx.buffer === viewy.buffer}`, true); 

    var allokx = true;
    for(var i = 0; i < viewx.length; ++i) 
    {
        allokx = allokx && (viewx[i] === i + 1);
    }
    telemetryLog(`allokx: ${allokx}`, true); 

    telemetryLog(`viewz.length: ${viewz.length}`, true); 

    var allokz = true;
    for(var i = 0; i < viewz.length; ++i) 
    {
        allokz = allokz && (viewz[i] === i / 2.0);
    }
    telemetryLog(`allokz: ${allokz}`, true); 

    
    viewx[1] = 0;
    

    telemetryLog(`viewy[0]: ${viewy[0]}`, true); 
    telemetryLog(`viewy[1]: ${viewy[1]}`, true); 
    telemetryLog(`viewy[2]: ${viewy[2]}`, true); 
    telemetryLog(`viewy[3]: ${viewy[3]}`, true); 

    
    viewz[0] = 0.5;
    

    telemetryLog(`viewz[0]: ${viewz[0]}`, true); 

    emitTTDLog(ttdLogURI);
}