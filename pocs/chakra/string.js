var x = 'Hello';
var y = 'World';
var empty = '';

print(testFunction, 50);



function testFunction()
{
    print(`x: ${x}`, true); 
    print(`y: ${y}`, true); 

    print(`empty.length: ${empty.length}`, true); 
    print(`x.length: ${x.length}`, true); 
    print(`x + \' \' + y: ${x + ' ' + y}`, true); 

    emitTTDLog(ttdLogURI);
}