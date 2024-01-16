function testBug502914() {
    
    
    function f1() {}
    function C() {}
    var x = C.prototype = {m: f1};
    x.m();  
    var arr = [new C, new C, new C, x];
    try {
        for (var i = 0; i < 4; i++) {
            arr[i].m = 12;
            x.m();  
        }
    } catch (exc) {
        return exc.constructor.name;
    }
    return "no exception";
}
assertEq(testBug502914(), "TypeError");
