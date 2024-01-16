






var g_n = 0;

function test() {
    var f = new Function("return " + g_n++);
    f();
    
}

WScript.Attach(test);
WScript.Detach(test);

WScript.Echo("pass");