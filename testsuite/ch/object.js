




var x = { foo: 3, bar: null };
var y = x;

y.baz = "new prop";

var z = new Object();
z['foo'] = 3;
z[1] = "bob";
z['2'] = "bob2";

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`typeof (x): ${typeof (x)}`, true); 
    telemetryLog(`typeof (z): ${typeof (z)}`, true); 

    telemetryLog(`x === y: ${x === y}`, true); 
    telemetryLog(`x !== z: ${x !== z}`, true); 

    telemetryLog(`y.foo: ${y.foo}`, true); 
    telemetryLog(`z.foo: ${z.foo}`, true); 
    telemetryLog(`z[1]: ${z[1]}`, true); 
    telemetryLog(`z[2]: ${z[2]}`, true); 

    telemetryLog(`x.foo: ${x.foo}`, true); 
    telemetryLog(`x.bar: ${x.bar}`, true); 
    telemetryLog(`x.baz: ${x.baz}`, true); 

    telemetryLog(`x.notPresent: ${x.notPresent}`, true); 
    telemetryLog(`z[0]: ${z[0]}`, true); 
    telemetryLog(`z[5]: ${z[5]}`, true); 

    
    z.foo = 0;
    y.foo = 10;
    y.foo2 = "ten";
    y[10] = "foo";
    y.bar = 3;
    

    telemetryLog(`post update -- z[0]: ${z[0]}`, true); 
    telemetryLog(`post update -- z.foo: ${z.foo}`, true); 
    telemetryLog(`post update -- x.foo: ${x.foo}`, true); 
    telemetryLog(`post update -- x.foo2: ${x.foo2}`, true); 
    telemetryLog(`post update -- x[0]: ${x[0]}`, true); 
    telemetryLog(`post update -- x[10]: ${x[10]}`, true); 

    telemetryLog(`post update -- y.bar: ${y.bar}`, true); 
    telemetryLog(`post update -- x.bar: ${x.bar}`, true); 

    emitTTDLog(ttdLogURI);
}