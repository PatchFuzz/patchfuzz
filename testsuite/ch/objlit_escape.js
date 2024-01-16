





var obj;
function test(param)
{
    obj = { x: 1, y: function() { return param; } };
}

test("test1");
WScript.Echo(obj.y());
test("test2");
WScript.Echo(obj.y());
