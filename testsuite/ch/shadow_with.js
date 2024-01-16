






var a = 1;
with ({a: 2}) {
    a++;
    eval("a=100;");
    WScript.Echo(a);
    WScript.Echo('PASSED'); 
}
WScript.Echo(a);