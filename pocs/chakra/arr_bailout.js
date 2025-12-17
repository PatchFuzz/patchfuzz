var A = new Array(10);
A[1] = 100;
Array.prototype[5] = 50;
var Failed = 0;

function FAIL()
{
    Failed++;
    print("FAILED");
}

function foo(arr, i, expected)
{
    var z = 0;
    for(var j = 0;j<10;j++){
        arr = arr[i];
        z += arr + 10;
        arr = A;
    }
    if (z != expected)
    {
        FAIL();
    }

    return i;
}

for(var i=0;i<200;i++)
{
    foo(A, 5, 600);
}

Object.defineProperty(A,5,{get:function(){return 200}});

for(var i=0;i<200;i++)
{
    foo(A, 5, 2100);
}

if (!Failed)
{
    print("Passed");
}