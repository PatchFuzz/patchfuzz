var x = { foo: 3, bar: null };
var y = x;

y.baz = "new prop";

var z = new Object();
z['foo'] = 3;
z[1] = "bob";
z['2'] = "bob2";

print(testFunction, 50);



function testFunction()
{
    print(`typeof (x): ${typeof (x)}`, true); 
    print(`typeof (z): ${typeof (z)}`, true); 

    print(`x === y: ${x === y}`, true); 
    print(`x !== z: ${x !== z}`, true); 

    print(`y.foo: ${y.foo}`, true); 
    print(`z.foo: ${z.foo}`, true); 
    print(`z[1]: ${z[1]}`, true); 
    print(`z[2]: ${z[2]}`, true); 

    print(`x.foo: ${x.foo}`, true); 
    print(`x.bar: ${x.bar}`, true); 
    print(`x.baz: ${x.baz}`, true); 

    print(`x.notPresent: ${x.notPresent}`, true); 
    print(`z[0]: ${z[0]}`, true); 
    print(`z[5]: ${z[5]}`, true); 

    
    z.foo = 0;
    y.foo = 10;
    y.foo2 = "ten";
    y[10] = "foo";
    y.bar = 3;
    

    print(`post update -- z[0]: ${z[0]}`, true); 
    print(`post update -- z.foo: ${z.foo}`, true); 
    print(`post update -- x.foo: ${x.foo}`, true); 
    print(`post update -- x.foo2: ${x.foo2}`, true); 
    print(`post update -- x[0]: ${x[0]}`, true); 
    print(`post update -- x[10]: ${x[10]}`, true); 

    print(`post update -- y.bar: ${y.bar}`, true); 
    print(`post update -- x.bar: ${x.bar}`, true); 

    emitTTDLog(ttdLogURI);
}