




var a = 0;

function isless(x,y)
{
    return (x < y);
}

var i = 0;
do
{
    a += i;
    ++i;

} while(isless(i, 100) && isless(a, 5000));

WScript.Echo(a);
