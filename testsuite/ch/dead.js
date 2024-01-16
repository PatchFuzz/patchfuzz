





function func(f)
{
    var a = 1;
    var b = 2;
    if (f() === 1)
    {
        WScript.Echo(a);
    }
    else
    {
        WScript.Echo(b);
    }
}

function one() { return 1; }
function zero() { return 0; }


func(zero);
func(one);
