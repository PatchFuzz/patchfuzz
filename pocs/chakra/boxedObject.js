var xb = new Boolean(true);
var yb = xb;
yb.foob = 3;

var zb = new Boolean(true);

var xn = new Number(5);
var yn = xn;
yn.foon = 3;

var zn = new Number(5);

var xs = new String("bob");
var ys = xs;
ys.foos = 3;

var zs = new String("bob");

print(testFunction, 50);



function testFunction()
{
    print(`typeof (xb): ${typeof (xb)}`, true); 
    print(`xb === yb: ${xb === yb}`, true); 
    print(`xb !== zb: ${xb !== zb}`, true); 
    print(`xb == true: ${xb == true}`, true); 
    print(`xb === true: ${xb === true}`, true); 
    print(`xb.foob: ${xb.foob}`, true); 

    print(`typeof (xn): ${typeof (xn)}`, true); 
    print(`xn === yn: ${xn === yn}`, true); 
    print(`xn !== zn: ${xn !== zn}`, true); 
    print(`xn == 5: ${xn == 5}`, true); 
    print(`xn === 5: ${xn === 5}`, true); 
    print(`xn.foon: ${xn.foon}`, true); 

    print(`typeof (xs): ${typeof (xs)}`, true); 
    print(`xs === ys: ${xs === ys}`, true); 
    print(`xs !== zs: ${xs !== zs}`, true); 
    print(`xs == \'bob\': ${xs == "bob"}`, true); 
    print(`xs === \'bob\': ${xs === "bob"}`, true); 
    print(`xs.foos: ${xs.foos}`, true); 

    emitTTDLog(ttdLogURI);
}