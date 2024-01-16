




var x = { foo: 3, bar: null };

Object.defineProperty(x, "b", {
    get: function () { return this.foo + 1; },
    set: function (x) { this.foo = x / 2; }
});

Object.defineProperty(x, "onlyone", {
    get: function () { return this.bar; }
});

var y = {};
Object.defineProperty(y, "pdata", { value : 24 });
Object.defineProperty(y, "pwrite", {value : 12, writable: true});
Object.defineProperty(y, "pdel", {get : function() {return "pdel";}, configurable: true});
Object.defineProperty(y, "pconfig", {get : function() {return "pconfig";}, configurable: true});
Object.defineProperty(y, "penum", {get : function() {return "penum";}, enumerable: true});

var oWritable = {};
Object.defineProperty(oWritable, "p", { writable: true });

var oNotWritable = {};
Object.defineProperty(oNotWritable, "p", { writable: false });

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`typeof (x): ${typeof (x)}`, true); 

    telemetryLog(`x.foo: ${x.foo}`, true); 
    telemetryLog(`x.b: ${x.b}`, true); 

    telemetryLog(`x.onlyone: ${x.onlyone}`, true); 

    
    x.b = 12;
    

    telemetryLog(`x.foo: ${x.foo}`, true); 
    telemetryLog(`x.b: ${x.b}`, true); 

    telemetryLog(`Object.getOwnPropertyDescriptor(y.pdata): ${JSON.stringify(Object.getOwnPropertyDescriptor(y, "pdata"))}`, true); 
    telemetryLog(`Object.getOwnPropertyDescriptor(y.pwrite): ${JSON.stringify(Object.getOwnPropertyDescriptor(y, "pwrite"))}`, true); 
    telemetryLog(`Object.getOwnPropertyDescriptor(y.pdel): ${JSON.stringify(Object.getOwnPropertyDescriptor(y, "pdel"))}`, true); 
    telemetryLog(`Object.getOwnPropertyDescriptor(y.pconfig): ${JSON.stringify(Object.getOwnPropertyDescriptor(y, "pconfig"))}`, true); 
    telemetryLog(`Object.getOwnPropertyDescriptor(y.penum): ${JSON.stringify(Object.getOwnPropertyDescriptor(y, "penum"))}`, true); 

    telemetryLog(`y.pdel: ${y.pdel}`, true); 
    delete y.pdel; 
    telemetryLog(`y.pdel: ${y.pdel}`, true); 
    telemetryLog(`Object.getOwnPropertyDescriptor(y.pdel): ${JSON.stringify(Object.getOwnPropertyDescriptor(y, "pdel"))}`, true); 

    oWritable.p = 10;
    oNotWritable.p = 10;
    telemetryLog(`oWritable.p: ${oWritable.p}`, true); 
    telemetryLog(`oNotWritable.p: ${oNotWritable.p}`, true); 

    emitTTDLog(ttdLogURI);
}