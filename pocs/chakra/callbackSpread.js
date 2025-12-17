print("Start Global Code", true);

function foo1()
{
    print("Start Foo1", true);
    
    print("Hello World - CallBack 1");
    
    print("End Foo1", true);
}

function foo2()
{
    print("Start Foo2", true);
    
    print("Hello World - CallBack 2");
    
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
print(foo2, 400);
print(foo3, 600);
print("Hello World - Global");

print("End Global Code", true);

