





var B = 6;

function test0()
{
    return B;
}

WScript.Echo(test0());

WScript.Echo(test0());
B++;

WScript.Echo(test0());



var obj = {A:1}

function test1()
{
    return obj.A;
}

WScript.Echo(test1());
WScript.Echo(test1());
obj.A = 2;

WScript.Echo(test1());


Object.prototype.C = 5;

function test2()
{
    return C;
}

WScript.Echo(test2());
WScript.Echo(test2());
C=2;
WScript.Echo(test2());



