







var x = 1; 
WScript.Echo(foo);
WScript.Echo(bar);
switch (x) {
    
    case 1: function foo() { return 'foo'; } break;
    case 2: function bar() { return 'bar'; } break;
}
WScript.Echo(foo);
WScript.Echo(bar);
WScript.Echo('PASSED')
