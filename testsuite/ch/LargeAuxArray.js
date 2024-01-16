






var o = { };

function AddAccessorProperty()
{
    
    Object.defineProperty(o, "a", { get: function () { return 10; } , configurable: true} );
}

function AddPropertiesToObjectArray()
{
    
    for (var i = 0; i < 25; i++) {
        o["p" + i] = 0;
    }
}

AddAccessorProperty();
AddPropertiesToObjectArray();
AddAccessorProperty();

WScript.Echo(o.a === 10 ? "PASSED" : "FAILED");
