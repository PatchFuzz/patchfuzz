




function outer(val)
{
    var iic = val + 1;

    function inner() { return iic++; }

    return inner;
}
var fouter = outer(3);
var gouter = outer(5);

function ctr(val)
{
    var iic = val;

    this.inc = function () { return iic++; }
    this.dec = function () { return iic--; }
}
var fctr = new ctr(3);
var fctr2 = fctr;
var gctr = new ctr(5);

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    
    fouter();
    

    telemetryLog(`fouter(): ${fouter()}`, true); 
    telemetryLog(`gouter(): ${gouter()}`, true); 

    
    fctr.inc();
    

    telemetryLog(`fctr.inc(): ${fctr.inc()}`, true); 
    telemetryLog(`gctr.inc(): ${gctr.inc()}`, true); 

    
    fctr2.dec();
    fctr2.dec();
    

    telemetryLog(`post decrement -- fctr.inc(): ${fctr.inc()}`, true); 
    telemetryLog(`post decrement -- gctr.inc(): ${gctr.inc()}`, true); 

    emitTTDLog(ttdLogURI);
}