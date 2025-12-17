var obj = {get x(){return 2;}};
function a()
{
}
function b()
{
}

function foo(x, y)
{
    if(y == 0) return;
    x();
    foo(b, --y);
}
foo(a,4);
print("PASSED");
