print("Scenario: Closure with multiple variables");

function f(a)
{
    var x = 12;
    var y = "test";
    var z = 1.1;

        var ret = function()
        {
                print(a);
                print(x);
                print(y);
                print(z);
        }

    return ret;
}

function g(func)
{
    func();
}

var clo = f("ArgIn");
g(clo);
