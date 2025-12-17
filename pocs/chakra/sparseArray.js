var a = new Array(0x15000); 

var i=0;

for(var i=50;i<60;i++)
{
  a[i] = i+10;
}

for(var i=0;i<10;i++)
{
  a[i] = i+20;
}

for(var i=100;i<110;i++)
{
  a[i] = i*10;
}

var b = new Array(0x15000); 

for(var i=50;i<60;i++)
{
  a[i] = i+10;
}

for(var i=0;i<10;i++)
{
  a[i] = i+20;
}

for(var i=100;i<110;i++)
{
  a[i] = i+40;
}

var c = a.concat(b);

var  d = a.slice(10);

var x = [];
x[0xFFFFFFFF] = 0;
x[0xFFFFFFFE] = 1;
x[0xFFFFFFFD] = 2;

print(testFunction, 50);



function testFunction()
{
    print(`${c[50]}`, true);
    print(`${c[0]}`, true);

    print(`${a.shift()}`, true);
    print(`${a[7]}`, true);
    print(`${a[8]}`, true);
    print(`${a.shift()}`, true);
    print(`${a.length}`, true);

    print(`${d[41]}`, true);
    print(`${d[90]}`, true);

    a.splice(45,3,"a","b","c");

    print(`${a[45]}`, true);
    print(`${a[46]}`, true);
    print(`${a[50]}`, true);
    print(`${a[100]}`, true);
    print(`${a.length}`, true);

    print(`${x[0xFFFFFFFF]} ${x.length}`, true);
    print(`${x[0xFFFFFFFE]} ${x.length === 0xFFFFFFFF}`, true);
    print(`${x[0xFFFFFFFD]} ${x.length === 0xFFFFFFFF}`, true);

    emitTTDLog(ttdLogURI);
}