




function test0() {
    function bar2(x) {
        x = 1; 
    }
    switch ('abc') {
        case 1:
            function a() { }
            function b() {
                a = 1;
            }
            b();
            break;
        case 'abc':
            y = bar2({ a: 1 });
            break;
        default:
            break;
    }
}
test0();
test0();

WScript.Echo('pass');