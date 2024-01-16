





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
WScript.Echo(x.z());
test("test2");
WScript.Echo(x.z());
