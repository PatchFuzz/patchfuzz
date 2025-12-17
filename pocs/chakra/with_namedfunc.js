var x = { z: 0 };
function test(param)
{
    with (x)
    {
        z = function blah()
        {
            return param;
        }
    }

}


test("test1");
print(x.z());
test("test2");
print(x.z());
