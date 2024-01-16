





var obj = {A:1, B:2} 

function test0()
{
    return obj.A;
}

WScript.Echo(test0());
WScript.Echo(test0());
obj.A = 99;
WScript.Echo(test0());



var obj = {A:1} 
Object.defineProperty(obj, "B", {
    enumerable   : true,
    configurable : false,
    writable     : false, 
    value        : 20
}); 

function test1()
{
    return obj.B;
}

WScript.Echo(test1());
WScript.Echo(test1());
obj.B = 99;
WScript.Echo(test1());


