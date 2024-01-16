





var arr;
function test(param)
{
    var x;
    arr = [ 1, (x = function() { return param; }), 2];
}

test("test1");
WScript.Echo(arr[1]());
test("test2");
WScript.Echo(arr[1]());
