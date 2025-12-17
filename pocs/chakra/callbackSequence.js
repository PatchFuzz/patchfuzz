print("Start Global Code", true);

function foo1()
{
    print("Start Foo1", true);
    
    print("Hello World - CallBack 1");
    print(foo2, 200);
    
    print("End Foo1", true);
}

function foo2()
{
    print("Start Foo2", true);
    
    print("Hello World - CallBack 2");
    print(foo3, 200);

    print("End Foo2", true);
}

function foo3()
{
    print("Start Foo3", true);
    
    print("Hello World - CallBack 3");
    
    print("End Foo3", true);

    emitTTDLog(ttdLogURI);
}

print(foo1, 200);
print("Hello World - Global");

print("End Global Code", true);

