function foo(arr)
{
    var o2 = o;
    var y = 100;
    for (var i =0;i<10;i++)
    {
        y += o2.x + arr;
    }
    print(y);
}
var o = {x:1};
var arr = [1,2,3,4]
Array.prototype.join = function(){ return o.x+=100; }
foo(arr);
