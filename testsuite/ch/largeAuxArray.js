




var o = { };

function AddAccessorProperty()
{
    
    Object.defineProperty(o, "a", { get: function () { return 10; } , configurable: true} );
}

function AddPropertiesToObjectArray()
{
    
    for (var i = 0; i < 25000; i++) {
        o["p" + i] = 0;
    }
}

AddAccessorProperty();
AddPropertiesToObjectArray();
AddAccessorProperty();

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`o.a === 10: ${o.a === 10}`, true);

    emitTTDLog(ttdLogURI);
}
