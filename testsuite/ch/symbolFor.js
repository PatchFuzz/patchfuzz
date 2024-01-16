




var y = Symbol.for('bob');

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    var x = Symbol.for('ted');
    var z = Symbol.for('bob');
    var sym1 = Symbol.for('A\0X');
    var sym2 = Symbol.for('A\0Y');
    var sym3 = Symbol.for('A\0X');

    telemetryLog(`x === y: ${x === y}`, true); 
    telemetryLog(`z === y: ${z === y}`, true); 
    telemetryLog(`sym1 === sym2: ${sym1 === sym2}`, true); 
    telemetryLog(`sym1 === sym3: ${sym1 === sym3}`, true); 

    var zo = Symbol('bob');

    telemetryLog(`zo === y: ${zo === y}`, true); 

    emitTTDLog(ttdLogURI);
}
