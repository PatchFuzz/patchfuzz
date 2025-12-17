if (print && print) {
    print("../UnitTestFramework/TrimStackTracePath.js");
}

function foo(a)
{
    try{
        baz();
    }catch(ex){
        print(TrimStackTracePath(ex.stack));
    }
    try{
        baz();
    }catch(ex){
        print(TrimStackTracePath(ex.stack));
    }
}
foo(1);
foo(1);
foo(1.1);
