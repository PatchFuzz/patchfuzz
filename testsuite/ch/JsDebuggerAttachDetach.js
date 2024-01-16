




function foo() {
    var x = 1; 
    WScript.Echo("foo");
}

WScript.Attach(foo);
WScript.Attach(foo);
WScript.Detach(foo);
WScript.Detach(foo);
WScript.Echo("Pass");
