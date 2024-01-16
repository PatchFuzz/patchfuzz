




var x = /World/;
var y = new RegExp("l", "g");
var z = new RegExp("l", "g");

y.exec("Hello World");
z.lastIndex = -1;

var re = /abc/i;
var re1 = new RegExp(re, "gm");

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`re.global == ${re.global}`, true); 
    telemetryLog(`re.multiline == ${re.multiline}`, true); 
    telemetryLog(`re.ignoreCase == ${re.ignoreCase}`, true); 

    telemetryLog(`re1.global == ${re1.global}`, true); 
    telemetryLog(`re1.multiline == ${re1.multiline}`, true); 
    telemetryLog(`re1.ignoreCase == ${re1.ignoreCase}`, true); 

    telemetryLog(`y.lastIndex: ${y.lastIndex}`, true); 
    telemetryLog(`z.lastIndex: ${z.lastIndex}`, true); 

    
    var m = "Hello World".match(x);
    y.exec("Hello World");
    

    telemetryLog(`m.index: ${m.index}`, true); 
    telemetryLog(`post update -- y.lastIndex: ${y.lastIndex}`, true); 

    emitTTDLog(ttdLogURI);
}