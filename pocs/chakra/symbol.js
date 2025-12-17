var x = 'Hello';

var xs = Symbol("Hello");
var ys = xs;

var zs = Symbol("Hello");

var obj = {};
obj[x] = 1;
obj[xs] = 2;
obj[zs] = 3;

var symObj = Object(zs);

print(testFunction, 50);



function testFunction()
{
    print(`typeof zs: ${typeof(zs)}`, true); 
    print(`typeof symObj: ${typeof(symObj)}`, true); 
    
    print(`xs == ys: ${xs == ys}`, true); 
    print(`xs == zs: ${xs == zs}`, true); 

    print(`obj[x]: ${obj[x]}`, true); 
    print(`obj.Hello: ${obj.Hello}`, true); 

    print(`obj[xs]: ${obj[xs]}`, true); 
    print(`obj[ys]: ${obj[ys]}`, true); 

    print(`obj[zs]: ${obj[zs]}`, true); 
    print(`obj[symObj]: ${obj[symObj]}`, true); 

    emitTTDLog(ttdLogURI);
}