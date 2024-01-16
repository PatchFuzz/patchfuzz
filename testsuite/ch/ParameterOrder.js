










function a()
{
    
    
    

    WScript.Echo("a()");
    return 1;
}

function b()
{
    WScript.Echo("b()");
    return 2;
}

function c(p1, p2)
{
    
    
    

    WScript.Echo("c(p1, p2)");
    return p1 - p2;
}

function MyClass(p1, p2) {
    
    
    

    WScript.Echo("MyClass(p1, p2)");
    this.value = p1 - p2;
}






WScript.Echo("Regular function call");

var result = c(a(), b());
WScript.Echo(result);






WScript.Echo("Constructor function call");

var result = new MyClass(a(), b());
WScript.Echo(result.value);
