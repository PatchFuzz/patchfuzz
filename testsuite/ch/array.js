




var x = [3, null, {}];
var y = x;
y.baz = 5;

var q = [1, 2];
q.length = 5;

var qq = [1, 2, 3, 4, 5];
qq.pop();
qq.pop();

var qqq = [1, 2, 3, 4, 5];
delete qqq[3];

var o = new Object();
o.length = 10;

var o1 = new Object();
var a = [1000,2000,3000];

a.x = 40;
a[o] = 50;

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`Array.isArray(x): ${Array.isArray(x)}`, true);  
    telemetryLog(`x.length: ${x.length}`, true); 

    telemetryLog(`x === y: ${x === y}`, true); 
    telemetryLog(`x.baz: ${x.baz}`, true); 
    telemetryLog(`x[0]: ${x[0]}`, true); 
    telemetryLog(`y[1]: ${y[1]}`, true); 
    telemetryLog(`x[5]: ${x[5]}`, true); 

    
    x[1] = "non-null";
    x[5] = { bar: 3 };
    x.push(10);
    

    telemetryLog(`post update -- y[1]: ${y[1]}`, true); 
    telemetryLog(`post update -- x[5] !== null: ${x[5] !== null}`, true); 
    telemetryLog(`post update -- x[5].bar: ${x[5].bar}`, true); 
    telemetryLog(`post update -- y[6]: ${y[6]}`, true); 

    telemetryLog(`q.length: ${q.length}`, true); 
    telemetryLog(`q[3]: ${q[3]}`, true); 

    telemetryLog(`qq.length: ${qq.length}`, true); 
    telemetryLog(`qq[3]: ${qq[3]}`, true); 

    telemetryLog(`qqq.length: ${qqq.length}`, true); 
    telemetryLog(`qqq[3]: ${qq[undefined]}`, true); 

    telemetryLog(`a[o]: ${a[o]}`, true); 
    telemetryLog(`a[o1]: ${a[o1]}`, true); 
    telemetryLog(`a["[object Object]"]: ${a["[object Object]"]}`, true); 
    telemetryLog(`a["[object" + " Object]"]: ${a["[object" + " Object]"]}`, true); 

    emitTTDLog(ttdLogURI);
}