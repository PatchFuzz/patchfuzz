




function test0(a)
{
    for (var i = a.length; i--; )
    {
        c = a[i];
        b =a.slice(i);
    }
}

var arr = [0,1,2,3];

test0(arr);
test0(0);

print('pass');

