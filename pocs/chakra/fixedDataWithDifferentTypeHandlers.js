var B = 6;

function test0()
{
    return B;
}

print(test0());

print(test0());
B++;

print(test0());



var obj = {A:1}

function test1()
{
    return obj.A;
}

print(test1());
print(test1());
obj.A = 2;

print(test1());


Object.prototype.C = 5;

function test2()
{
    return C;
}

print(test2());
print(test2());
C=2;
print(test2());



