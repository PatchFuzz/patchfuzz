var x = new Date();
var y = x;

var z = new Date(2012, 1);

y.foo = 3;

var w = Date.now();

var dinfty = new Date(Infinity);

print(testFunction, 50);



function testFunction()
{
    print(`x === y: ${x === y}`, true); 
    print(`w !== z: ${w !== z.valueOf()}`, true); 

    print(`y.foo: ${y.foo}`, true); 
    print(`x.foo: ${x.foo}`, true); 

    print(`w - z > 0: ${w - z.valueOf() > 0}`, true); 
    print(`x - y: ${x.valueOf() - y.valueOf()}`, true); 

    try 
    {
        print(dinfty.toISOString(), true);
    } 
    catch(e) 
    {
        print(`Infinity Date toISOString : ${e.name}  : ${e.message}`, true);
    }
    print(`Infinity Date toJSON : ${dinfty.toJSON()}`, true);

    emitTTDLog(ttdLogURI);
}