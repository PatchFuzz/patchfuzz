function f()
{
    return "called f";
}
f.foo = 3;
            
var g = f;

print(testFunction, 50);



function testFunction()
{
    print(`f !== null: ${f !== null}`, true); 
    print(`f === g: ${f === g}`, true); 
    print(`g.foo: ${g.foo}`, true); 

    print(`f(): ${f()}`, true); 
    print(`g(): ${g()}`, true); 

    emitTTDLog(ttdLogURI);
}