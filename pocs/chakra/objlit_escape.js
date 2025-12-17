var obj;
function test(param)
{
    obj = { x: 1, y: function() { return param; } };
}

test("test1");
print(obj.y());
test("test2");
print(obj.y());
