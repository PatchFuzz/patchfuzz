var obj = {A:1, B:2} 

function test0()
{
    return obj.A;
}

print(test0());
print(test0());
obj.A = 99;
print(test0());



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

print(test1());
print(test1());
obj.B = 99;
print(test1());


