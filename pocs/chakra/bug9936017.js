var obj = 
{
    foo : function() {},
}

function test()
{
    obj.foo.apply();
}

function test1()
{
    test();
}

test1();
test1();
test1();

print("PASSED");