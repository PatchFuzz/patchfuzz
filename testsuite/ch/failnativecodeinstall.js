








var x = 0;
var y;

try {
    try {
        x++;
        
        f();
    }
    catch (e) {
        WScript.Echo('caught call ' + x++);
        
        f();
    }
}
catch (e) {
    WScript.Echo('caught call ' + x);
    try {
        try {
            x++;
            
            f();
        }
        catch (e) {
            WScript.Echo('caught call ' + x++);
            
            f();
        }
    }
    catch (e) {
        WScript.Echo('done');
    }
}

function f() {
    WScript.Echo('call ' + x);
    while (1) {
        y++;
    }
}

