var glo;
function tree1()
{
    function child1()
    {
        return tree2();
    }

    return child1();
}


function tree2()
{
    var x = 123;
    function nested()
    {
        if (doescape)
        {
            escape();
        }
        return x;
    }

    function escape()
    {
        glo = arguments.callee.caller;
    }


    return (function(param) { return param; })(nested());
}

var doescape = false;
print(tree1());
doescape = true;
print(tree1());
doescape = false;
print(glo());
