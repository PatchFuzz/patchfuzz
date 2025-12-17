var x1 = {p01: 0};
Object.preventExtensions(x1);
var y1 = {p01: 0};



var f2 = function f(o) { var tepm = o["p02_2"]; o["p02_2"] = 10; };
var x2 = {p02_1: 0};
f2(x2);
var y2 = {p02_1: 0};
Object.preventExtensions(y2);
f2(y2);



var x3 = {p03: 0};
Object.preventExtensions(x3);
delete x3["p03"];
var y3 = {p03: 0}; 
y3["p03"] = 2;
Object.preventExtensions(y3); 
y3["p03"] = 3; 



var x5 = {p05: 0};
Object.seal(x5);
Object.defineProperty(x5, "p05", {writable: false, value: 100}); 
var y5 = {p05: 0};
Object.seal(y5); 
Object.defineProperty(y5, "p05", {writable: false, value: 200}); 

var values6 = [0, 1, 2, 3];
var x6 = {p06: 0};
x6["p06"] = values6[0];
Object.freeze(x6);
x6["p06"] = values6[1];  
var y6 = {p06: 0};
Object.seal(y6);
y6["p06"] = values6[2];   
var z6 = {p06: 0};
Object.preventExtensions(z6);
z6["p06"] = values6[3];   

var x9 = {p09: 0};
x9[0] = 0;
Object.preventExtensions(x9);
x9[1] = 1; 
Object.defineProperty(x9, '0', {value: 2}); 

print(testFunction, 50);



function testFunction()
{
    print(`Object.isExtensible(x1): ${Object.isExtensible(x1)}`, true);
    print(`Object.isExtensible(y1): ${Object.isExtensible(y1)}`, true);

    

    print(`y2["p02_2"]: ${y2["p02_2"]}`, true);

    

    print(`Object.isExtensible(x3): ${Object.isExtensible(x3)}`, true);
    print(`y3["p03"]: ${y3["p03"]}`, true); 

    

    print(`y5["p05"]: ${y5["p05"]}`, true); 

    

    print(`[x6["p06"], y6["p06"], z6["p06"]]: ${[x6["p06"], y6["p06"], z6["p06"]]}`, true); 

    

    print(`x9[0]: ${x9[0]}`, true); 
    print(`x9[1]: ${x9[1]}`, true); 

    emitTTDLog(ttdLogURI);
}
