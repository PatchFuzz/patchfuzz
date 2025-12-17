print("..\\UnitTestFramework\\UnitTestFramework.js");

function testRelationalComparison (retVal)
{
    var ObjectV = function ObjectV(v){ }

    ObjectV.prototype = {
        valueOf : function(){ return retVal; }
    };

    function f()
    {
        var x = new ObjectV(0);
        x<"1";
    }

    f();
    f();
    f();
}

testRelationalComparison(null);
testRelationalComparison(undefined);
print(function() { testRelationalComparison(Symbol("abc")); }, TypeError, "Number expected");

print("Passed");
