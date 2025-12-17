var x = 3;
var y = 5;

var xd = 4.6;
var yd = 9.2;

var myInf = Infinity;

print(testFunction, 50);



function testFunction()
{
    print(`x: ${x}`, true); 
    print(`y: ${y}`, true); 
    print(`xd: ${xd}`, true); 
    print(`yd: ${yd}`, true); 

    print(`x + y: ${x + y}`, true); 
    print(`x - y: ${x - y}`, true); 
    print(`x * y: ${x * y}`, true); 
    print(`x / y: ${x / y}`, true); 

    print(`isFinite(xd): ${isFinite(xd)}`, true); 
    print(`isFinite(myInf): ${isFinite(myInf)}`, true); 
    print(`isFinite(Infinity): ${isFinite(Infinity)}`, true); 

    print(`Math.abs(-2): ${Math.abs(-2)}`, true); 
    print(`Math.floor(1.5): ${Math.floor(1.5)}`, true); 

    emitTTDLog(ttdLogURI);
}