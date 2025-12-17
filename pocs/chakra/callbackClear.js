print("Start Global Code", true);

var foo1id = undefined;

function foo1()
{
    print("Start Foo1", true);
    
    print("Hello World - CallBack 1");
    
    print("End Foo1", true);
}

function foo2()
{
    print("Start Foo2", true);
    
    print("Cancel Callback 1 from CallBack 2");
    print(foo1id);
    
    print("End Foo2", true);

    emitTTDLog(ttdLogURI);
}

foo1id = print(foo1, 500);
print(foo2, 100);
print("Hello World - Global");

print("End Global Code", true);

