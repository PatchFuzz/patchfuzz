var x = true;
var y = false;

print(testFunction, 50);



function testFunction()
{
    print(`x: ${x}`, true); 
    print(`y: ${y}`, true); 

    print(`x === y: ${x === y}`, true); 

    print(`x && y: ${x && y}`, true); 
    print(`x || y: ${x || y}`, true); 

    emitTTDLog(ttdLogURI);
}