var x = 0;
var y;

try {
    try {
        x++;
        
        f();
    }
    catch (e) {
        print('caught call ' + x++);
        
        f();
    }
}
catch (e) {
    print('caught call ' + x);
    try {
        try {
            x++;
            
            f();
        }
        catch (e) {
            print('caught call ' + x++);
            
            f();
        }
    }
    catch (e) {
        print('done');
    }
}

function f() {
    print('call ' + x);
    while (1) {
        y++;
    }
}

