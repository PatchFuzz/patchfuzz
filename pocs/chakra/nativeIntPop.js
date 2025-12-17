var a = [0];
a[1] = 1
a[2] = 2;
Array.prototype[3] = 3; 

a[6] = 4;

function test1()
{
    return a.pop();
}

var len = a.length;

for(i=0; i <= len; i++)
{
    print(test1());
}

