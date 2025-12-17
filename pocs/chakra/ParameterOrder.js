function a()
{
    
    
    

    print("a()");
    return 1;
}

function b()
{
    print("b()");
    return 2;
}

function c(p1, p2)
{
    
    
    

    print("c(p1, p2)");
    return p1 - p2;
}

function MyClass(p1, p2) {
    
    
    

    print("MyClass(p1, p2)");
    this.value = p1 - p2;
}






print("Regular function call");

var result = c(a(), b());
print(result);






print("Constructor function call");

var result = new MyClass(a(), b());
print(result.value);
