print("Start Global Code", true);

function foo()
{
    print("Start Foo", true);
    
    print("Hello World - CallBack");
    
    print("End Foo", true);

    emitTTDLog(ttdLogURI);
}

print(foo, 250);
print("Hello World - Global");

print("End Global Code", true);

