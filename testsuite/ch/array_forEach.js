




function returnTrue(x,y,z)
{
    WScript.Echo("value:"+ x + " index:" + y + " Object:" + z);
    return true;
}

function returnFalse(x,y,z)
{
    WScript.Echo("value:"+ x + " index:" + y + " Object:" + z);
    return false;
}

function returnRandom(x,y,z)
{
    WScript.Echo("value:"+ x + " index:" + y + " Object:" + z);
    return y!=1;
}

Array.prototype[6] = 20;

var x = [1,2,3,4,5];
var y = x.forEach(returnTrue,this);
WScript.Echo(y);

x = [10,20,30,40,50];
y = x.forEach(returnFalse, this);
WScript.Echo(y);

x = [10,20,30,40,50];
y = x.forEach(returnRandom, this);
WScript.Echo(y);

x = {0: "abc", 1: "def", 2: "xyz"}
x.length = 3;

y = Array.prototype.forEach.call(x, returnTrue,this);
WScript.Echo(y);

y = Array.prototype.forEach.call(x, returnFalse,this);
WScript.Echo(y);

y = Array.prototype.forEach.call(x, returnRandom, this);
WScript.Echo(y);

x = [10,20,30,40,50];
x[8] = 10;
y = x.forEach(returnTrue, this);
WScript.Echo(y);
