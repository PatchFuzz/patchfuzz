print('../../test/TTBasic/loadTarget.js');

var msgFunction = foo('World');

var msg0 = msgFunction();

print(testFunction, 50);



function testFunction()
{
    print(`msg0: ${msg0}`, true); 
        
    print(`msgFunction() -- 1: ${msgFunction()}`, true); 
    print(`msgFunction() -- 2: ${msgFunction()}`, true); 

    emitTTDLog(ttdLogURI);
}