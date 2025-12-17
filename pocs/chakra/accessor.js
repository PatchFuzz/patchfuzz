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

print(testFunction, 50);



function testFunction()
{
    print(`typeof (x): ${typeof (x)}`, true); 

    print(`x.foo: ${x.foo}`, true); 
    print(`x.b: ${x.b}`, true); 

    print(`x.onlyone: ${x.onlyone}`, true); 

    
    x.b = 12;
    

    print(`x.foo: ${x.foo}`, true); 
    print(`x.b: ${x.b}`, true); 

    print(`Object.getOwnPropertyDescriptor(y.pdata): ${JSON.stringify(Object.getOwnPropertyDescriptor(y, "pdata"))}`, true); 
    print(`Object.getOwnPropertyDescriptor(y.pwrite): ${JSON.stringify(Object.getOwnPropertyDescriptor(y, "pwrite"))}`, true); 
    print(`Object.getOwnPropertyDescriptor(y.pdel): ${JSON.stringify(Object.getOwnPropertyDescriptor(y, "pdel"))}`, true); 
    print(`Object.getOwnPropertyDescriptor(y.pconfig): ${JSON.stringify(Object.getOwnPropertyDescriptor(y, "pconfig"))}`, true); 
    print(`Object.getOwnPropertyDescriptor(y.penum): ${JSON.stringify(Object.getOwnPropertyDescriptor(y, "penum"))}`, true); 

    print(`y.pdel: ${y.pdel}`, true); 
    delete y.pdel; 
    print(`y.pdel: ${y.pdel}`, true); 
    print(`Object.getOwnPropertyDescriptor(y.pdel): ${JSON.stringify(Object.getOwnPropertyDescriptor(y, "pdel"))}`, true); 

    oWritable.p = 10;
    oNotWritable.p = 10;
    print(`oWritable.p: ${oWritable.p}`, true); 
    print(`oNotWritable.p: ${oNotWritable.p}`, true); 

    emitTTDLog(ttdLogURI);
}