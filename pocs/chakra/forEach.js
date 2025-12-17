var x = { foo: 3, bar: null };
x.foo2 = 6;

var y = { foo: 5, bar: 'bar', baz: null };
delete y.bar;
y.bar2 = 'bar2'

var z = { foo: 10, bar: 'bar' };
delete z.bar;
z.baz = 'baz'
z.bar = 'bar'

var xo = [];
for(var xname in x)
{
    xo.push(xname);
}

var yo = [];
for(var yname in y)
{
    yo.push(yname);
}

var zo = [];
for(var zname in z)
{
    zo.push(zname);
}

print(testFunction, 50);



function testFunction()
{
    var idx = -1;
    
    idx = 0;
    for(var xname in x)
    {
        print(`xname: ${xname === xo[idx]}`, true); 
        idx++;    
    }
    
    idx = 0;
    for(var yname in y)
    {
        print(`yname: ${yname === yo[idx]}`, true); 
        idx++;    
    }
    
    idx = 0;
    for(var zname in z)
    {
        print(`zname: ${zname === zo[idx]}`, true); 
        idx++;    
    }

    emitTTDLog(ttdLogURI);
}