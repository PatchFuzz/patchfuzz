




var xb = new Boolean(true);
var yb = xb;
yb.foob = 3;

var zb = new Boolean(true);

var xn = new Number(5);
var yn = xn;
yn.foon = 3;

var zn = new Number(5);

var xs = new String("bob");
var ys = xs;
ys.foos = 3;

var zs = new String("bob");

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`typeof (xb): ${typeof (xb)}`, true); 
    telemetryLog(`xb === yb: ${xb === yb}`, true); 
    telemetryLog(`xb !== zb: ${xb !== zb}`, true); 
    telemetryLog(`xb == true: ${xb == true}`, true); 
    telemetryLog(`xb === true: ${xb === true}`, true); 
    telemetryLog(`xb.foob: ${xb.foob}`, true); 

    telemetryLog(`typeof (xn): ${typeof (xn)}`, true); 
    telemetryLog(`xn === yn: ${xn === yn}`, true); 
    telemetryLog(`xn !== zn: ${xn !== zn}`, true); 
    telemetryLog(`xn == 5: ${xn == 5}`, true); 
    telemetryLog(`xn === 5: ${xn === 5}`, true); 
    telemetryLog(`xn.foon: ${xn.foon}`, true); 

    telemetryLog(`typeof (xs): ${typeof (xs)}`, true); 
    telemetryLog(`xs === ys: ${xs === ys}`, true); 
    telemetryLog(`xs !== zs: ${xs !== zs}`, true); 
    telemetryLog(`xs == \'bob\': ${xs == "bob"}`, true); 
    telemetryLog(`xs === \'bob\': ${xs === "bob"}`, true); 
    telemetryLog(`xs.foos: ${xs.foos}`, true); 

    emitTTDLog(ttdLogURI);
}