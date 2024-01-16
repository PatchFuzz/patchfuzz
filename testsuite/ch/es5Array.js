




var x = [];
x[2] = 5;
x.foo = 3;

Object.defineProperty(x, '1', {
    get: function () { return this.foo + 1; },
    set: function (x) { this.foo = x / 2; }
});

Object.defineProperty(x, 11, {
    get: function () { return this.foo; }
});

var simpleArrayEmptyLength = [];
Object.defineProperty(simpleArrayEmptyLength, "length", {});

var aFixedInfo = [0, 1, 2, 3, 4, 5];
Object.defineProperty(aFixedInfo, "length", { writable: false });
Object.defineProperty(aFixedInfo, "2", { writable: false });

var aFrozen = [0, 1, 2, 3, 4, 5];
Object.freeze(aFrozen);

var oIncFreeze = [0, 1, 2, 3, 4, 5];
for (var i = 0; i < oIncFreeze.length; i++) 
{
    Object.defineProperty(oIncFreeze, i, { writable: false, configurable: false });
}
Object.preventExtensions(oIncFreeze);

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`Array.isArray(x): ${Array.isArray(x)}`, true); 

    telemetryLog(`x.foo: ${x.foo}`, true); 

    telemetryLog(`x[1]: ${x[1]}`, true); 
    telemetryLog(`x[11]: ${x[11]}`, true); 

    
    x[1] = 12;
    

    telemetryLog(`x[1]: ${x[1]}`, true); 
    telemetryLog(`x[11]: ${x[11]}`, true); 

    
    telemetryLog(`Object.getOwnPropertyDescriptor(simpleArrayEmptyLength.length): ${JSON.stringify(Object.getOwnPropertyDescriptor(simpleArrayEmptyLength, "length"))}`, true); 

    aFixedInfo[9] = 9; 
    telemetryLog(`aFixedInfo: ${JSON.stringify(aFixedInfo)}`, true); 
    aFixedInfo[1] = -1;
    aFixedInfo[2] = -2;
    telemetryLog(`aFixedInfo: ${JSON.stringify(aFixedInfo)}`, true); 

    telemetryLog(`Object.getOwnPropertyDescriptor(aFrozen.length): ${JSON.stringify(Object.getOwnPropertyDescriptor(aFrozen, "length"))}`, true); 

    telemetryLog(`isFrozen: ${Object.isFrozen(oIncFreeze)}`, true); 
    Object.defineProperty(oIncFreeze, "length", { writable: false });
    telemetryLog(`isFrozen: ${Object.isFrozen(oIncFreeze)}`, true);

    emitTTDLog(ttdLogURI);
}