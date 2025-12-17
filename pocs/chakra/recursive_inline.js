var obj = {get x(){return 2;}};
function foo(y)
{
    if(y == 0) return;
    obj.x;
    foo(--y);
}
foo(4);
print("PASSED");
